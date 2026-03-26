"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function MarketplaceForm() {
  return (
    <form 
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              email: data.get("email"),
              company: data.get("company"),
              subject: "Marketplace Waitlist Application",
              message: `Contractor joined marketplace waitlist.\nSpecialty: ${data.get("specialty")}`,
              source_page: "/marketplace"
            })
          });
          if (res.ok) {
            alert("Thank you! You've been added to the waitlist.");
            form.reset();
          } else {
            throw new Error();
          }
        } catch (e) {
          console.error("Waitlist error:", e);
          alert("Something went wrong. Please try again.");
        }
      }}
      className="grid md:grid-cols-2 gap-4 text-left"
    >
      <div className="space-y-2">
        <Input name="name" required placeholder="Full Name" className="h-12 border-border focus:ring-primary/20" />
      </div>
      <div className="space-y-2">
        <Input name="email" type="email" required placeholder="Work Email" className="h-12 border-border focus:ring-primary/20" />
      </div>
      <div className="space-y-2">
        <Input name="company" required placeholder="Company Name" className="h-12 border-border focus:ring-primary/20" />
      </div>
      <div className="space-y-2">
        <Input name="specialty" required placeholder="Main Specialty (e.g. HVAC, Fire)" className="h-12 border-border focus:ring-primary/20" />
      </div>
      <Button type="submit" className="md:col-span-2 h-14 bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-lg mt-4">
        Secure My Priority Access <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </form>
  );
}
