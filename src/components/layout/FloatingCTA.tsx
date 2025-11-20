import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end space-y-3">
      {isOpen && (
        <div className="bg-card border border-border rounded-lg shadow-lg p-4 w-72 animate-fade-in-up">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium text-sm">Need assistance?</h3>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mb-4 font-light">
            Get in touch with our 24/7 helpdesk or request a detailed proposal.
          </p>
          <div className="space-y-2">
            <Button size="sm" className="w-full" asChild>
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="sm" variant="outline" className="w-full" asChild>
              <a href="tel:08001234567">Call Helpdesk</a>
            </Button>
          </div>
        </div>
      )}
      
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
