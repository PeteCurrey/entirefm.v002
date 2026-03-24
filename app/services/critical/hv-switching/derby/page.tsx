import Derby from "@/legacy-pages/services/critical/hv-switching/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Derby | EntireFM",
  description: "Authorised Person HV switching for Derby's rail, aerospace and manufacturing estates. Planned isolation, load transfers and emergency HV response across Derbyshire.",
};

export default function DerbyPage() {
  return <Derby />;
}
