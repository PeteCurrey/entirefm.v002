import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, Paperclip, X, Image as ImageIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
interface Message {
  role: "user" | "assistant";
  content: string;
  attachmentUrl?: string;
}
interface AIChatPanelProps {
  onClose: () => void;
}
export default function AIChatPanel({
  onClose
}: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "Hello! I'm the EntireFM assistant. I can help you with:\n\n• Understanding our FM services\n• Compliance questions (EICR, TM44, ACOP L8, etc.)\n• Logging a maintenance issue\n• Finding the right service or form\n\nWhat can I help you with today?"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const uploadFile = async (file: File): Promise<string | null> => {
    try {
      setIsUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${sessionId}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      const {
        error: uploadError,
        data
      } = await supabase.storage.from('helpdesk-attachments').upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
      if (uploadError) {
        console.error('Upload error:', uploadError);
        toast({
          title: "Upload Failed",
          description: "Failed to upload file. Please try again.",
          variant: "destructive"
        });
        return null;
      }
      const {
        data: {
          publicUrl
        }
      } = supabase.storage.from('helpdesk-attachments').getPublicUrl(filePath);
      return publicUrl;
    } catch (error) {
      console.error('File upload error:', error);
      return null;
    } finally {
      setIsUploading(false);
    }
  };
  const streamChat = async (userMessage: Message) => {
    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-assistant`;
      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          sessionId,
          sourcePage: window.location.pathname,
          attachmentUrl: userMessage.attachmentUrl
        })
      });
      if (!response.ok) {
        if (response.status === 429) {
          toast({
            title: "Rate Limit",
            description: "Too many requests. Please wait a moment and try again.",
            variant: "destructive"
          });
          return;
        }
        if (response.status === 402) {
          toast({
            title: "Service Unavailable",
            description: "AI assistant is temporarily unavailable. Please try again later.",
            variant: "destructive"
          });
          return;
        }
        throw new Error('Failed to get response');
      }
      if (!response.body) throw new Error('No response body');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";
      let textBuffer = "";

      // Add empty assistant message that we'll update
      setMessages(prev => [...prev, {
        role: "assistant",
        content: ""
      }]);
      while (true) {
        const {
          done,
          value
        } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, {
          stream: true
        });
        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantMessage
                };
                return newMessages;
              });
            }
          } catch (e) {
            // Partial JSON, put it back
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Save to database
      try {
        const transcriptData = [...messages, userMessage, {
          role: "assistant",
          content: assistantMessage
        }];
        await supabase.from('ai_sessions').upsert({
          id: sessionId,
          last_activity_at: new Date().toISOString(),
          transcript: transcriptData as any,
          source_page: window.location.pathname
        });
      } catch (error) {
        console.error('Failed to save session:', error);
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
      // Remove the empty assistant message if error occurred
      setMessages(prev => prev.slice(0, -1));
    }
  };
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type (images only)
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File",
        description: "Please select an image file (JPG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive"
      });
      return;
    }
    setSelectedFile(file);
  };
  const clearFile = () => {
    setSelectedFile(null);
    setUploadedFileUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !selectedFile || isLoading || isUploading) return;
    let attachmentUrl: string | null = null;

    // Upload file first if selected
    if (selectedFile) {
      attachmentUrl = await uploadFile(selectedFile);
      if (!attachmentUrl) return; // Upload failed
      setUploadedFileUrl(attachmentUrl);
    }
    const userMessage: Message = {
      role: "user",
      content: input.trim() || "📎 Attachment",
      attachmentUrl: attachmentUrl || undefined
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    clearFile();
    setIsLoading(true);
    await streamChat(userMessage);
    setIsLoading(false);
    textareaRef.current?.focus();
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return <div className="flex flex-col h-[500px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-lg p-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              {message.attachmentUrl && <div className="mt-2 border border-border/20 rounded overflow-hidden">
                  <img src={message.attachmentUrl} alt="Attachment" className="max-w-full h-auto max-h-[200px] object-contain" />
                </div>}
            </div>
          </div>)}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-4">
        {selectedFile && <div className="mb-2 flex items-center gap-2 p-2 bg-muted rounded-lg">
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm flex-1 truncate">{selectedFile.name}</span>
            <Button type="button" size="icon" variant="ghost" onClick={clearFile} className="h-6 w-6 flex-shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>}
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 flex gap-2">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
            <Button type="button" size="icon" variant="outline" onClick={() => fileInputRef.current?.click()} disabled={isLoading || isUploading} className="h-[60px] w-[60px] flex-shrink-0">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Textarea ref={textareaRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask about services, compliance, or log an issue..." className="min-h-[60px] max-h-[120px] resize-none" disabled={isLoading || isUploading} />
          </div>
          <Button type="submit" size="icon" disabled={!input.trim() && !selectedFile || isLoading || isUploading} className="h-[60px] w-[60px] flex-shrink-0">
            {isLoading || isUploading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          AI responses may contain errors. For critical issues, call 020 4586 5422  
        </p>
      </div>
    </div>;
}