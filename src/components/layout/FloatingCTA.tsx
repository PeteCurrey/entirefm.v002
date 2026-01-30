import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, X, MessageSquare, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AIChatPanel from "@/components/ai-assistant/AIChatPanel";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleOpenChat = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowChat(false);
  };

  return (
    <>
      {/* Main Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <HelpCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assistance Panel */}
      <AnimatePresence>
        {isOpen && !showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-80"
          >
            <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Need assistance?</h3>
                  <p className="text-sm opacity-90">We're here to help</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Options */}
              <div className="p-4 space-y-3">
                <p className="text-sm text-muted-foreground font-light mb-4">
                  Get in touch with our 24/7 helpdesk, chat with our AI assistant, or request a detailed proposal.
                </p>

                <Button
                  onClick={handleOpenChat}
                  className="w-full justify-start gap-3"
                  variant="outline"
                >
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium">Chat Support</div>
                    <div className="text-xs text-muted-foreground">Ask about services or log an issue</div>
                  </div>
                </Button>

                <Button
                  asChild
                  className="w-full justify-start gap-3"
                  variant="outline"
                >
                  <a href="tel:08001234567">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Call Helpdesk</div>
                      <div className="text-xs text-muted-foreground">24/7 emergency response</div>
                    </div>
                  </a>
                </Button>

                <Button
                  asChild
                  className="w-full justify-start gap-3"
                >
                  <Link to="/contact">
                    <FileText className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Request a Proposal</div>
                      <div className="text-xs opacity-80">Get a tailored quote</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md"
          >
            <div className="bg-background border border-border rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCloseChat}
                    className="text-primary-foreground hover:bg-primary-foreground/10 h-8 w-8"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </Button>
                  <div>
                    <h3 className="font-semibold text-lg">EntireFM Assistant</h3>
                    <p className="text-sm opacity-90">Ask about services, compliance or logging an issue</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Chat Content */}
              <AIChatPanel onClose={handleClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;