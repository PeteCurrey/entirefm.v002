import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const SidebarCTA = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-charcoal text-white">
        <h3 className="text-xl font-light mb-4">Need This Service?</h3>
        <p className="text-sm text-gray-300 mb-6 font-light">
          Get a tailored proposal with fixed pricing, SLAs, and mobilisation timeline.
        </p>
        <Button asChild className="w-full mb-3" variant="secondary">
          <Link href="/contact">
            Request a Proposal
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <Button asChild className="w-full" variant="outline">
          <a href="tel:+448001234567" className="text-white border-white hover:bg-white hover:text-charcoal">
            <Phone className="w-4 h-4 mr-2" />
            24/7 Helpdesk
          </a>
        </Button>
      </Card>

      <Card className="p-6">
        <h4 className="font-medium mb-3">Related Services</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/services/ppm" className="text-muted-foreground hover:text-foreground transition-colors">
              Planned Preventative Maintenance
            </Link>
          </li>
          <li>
            <Link href="/services/compliance" className="text-muted-foreground hover:text-foreground transition-colors">
              Compliance Management
            </Link>
          </li>
          <li>
            <Link href="/services/emergency" className="text-muted-foreground hover:text-foreground transition-colors">
              24/7 Emergency Response
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
};
