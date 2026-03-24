import London from "@/legacy-pages/services/hvac/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in London | TM44 & F-Gas Services | Entire FM",
  description: "TM44 AC inspections, F-Gas leak governance and HVAC maintenance for London estates. EC 517/2014 compliant refrigerant management. Book audit.",
};

export default function LondonPage() {
  return <London />;
}
