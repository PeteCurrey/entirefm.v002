"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const STORAGE_KEY = "entirefm_chat_history";
const PULSE_KEY = "entirefm_chat_pulsed";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat
  useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY);
    const hasPulsed = localStorage.getItem(PULSE_KEY);

    if (storedHistory) {
      setMessages(JSON.parse(storedHistory));
      setShowPrompts(false);
    } else {
      // Pre-loaded opening message
      const openingMessage: Message = {
        role: "assistant",
        content: "Hi there 👋 I'm the EntireFM FM Advisor. I can help you understand your FM options, compliance requirements, or any questions about our services. What can I help you with today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([openingMessage]);
    }

    if (!hasPulsed) {
      setShowPulse(true);
    }
  }, []);

  // Save history
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (showPulse) {
      setShowPulse(false);
      localStorage.setItem(PULSE_KEY, "true");
    }
  };

  const handleSend = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setShowPrompts(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: newMessages.slice(-20).map(m => ({ role: m.role, content: m.content })) 
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.details || errData.error || "Failed to get response from AI servers");
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const fallbackText = error instanceof Error 
        ? `Error: ${error.message}` 
        : "Sorry, I couldn't get a response right now. Please try again or contact the team directly.";
        
      const errorMessage: Message = {
        role: "assistant",
        content: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedPrompts = [
    "What is PPM?",
    "Hard FM vs Soft FM",
    "Do you cover my area?",
    "I need a quote"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Button */}
      <div className="relative flex flex-col items-center">
        <motion.button
          onClick={handleToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors ${
            isOpen ? "bg-charcoal text-white" : "bg-primary text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showPulse && !isOpen && (
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
          )}
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
        {!isOpen && (
          <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-charcoal/60 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
            FM Advisor
          </span>
        )}
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[380px] h-[520px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-120px)] bg-white rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-charcoal p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                  <img src="/logo-small.svg" alt="EntireFM" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold leading-tight">EntireFM FM Advisor</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Ask me anything about FM</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/5">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {m.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold shrink-0 mb-1">
                        E
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm ${
                        m.role === "user"
                          ? "bg-charcoal text-white rounded-br-none"
                          : "bg-gray-100 text-charcoal rounded-bl-none border border-gray-200"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1 px-8">{m.timestamp}</span>
                </div>
              ))}
              
              {showPrompts && (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {suggestedPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(prompt)}
                      className="text-left text-xs bg-white border border-border p-2.5 rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold shrink-0">
                    E
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, 500))}
                  placeholder="Ask about FM, compliance, services..."
                  className="w-full bg-muted/30 border border-border rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-primary disabled:text-gray-300 transition-colors"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
              <div className="flex justify-between items-center mt-3 px-1">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                  {input.length}/500
                </span>
                <div className="flex items-center gap-1 group">
                  <Link href="/contact" className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline">
                    Contact the team <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-muted/20 border-t border-border">
              <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest leading-tight">
                Powered by AI · Not a substitute for professional FM advice
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
