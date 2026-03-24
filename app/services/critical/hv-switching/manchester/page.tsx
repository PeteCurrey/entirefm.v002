import Manchester from "@/legacy-pages/services/critical/hv-switching/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Manchester | EntireFM",
  description: "HV switching for Manchester data centres, hospitals and commercial estates. Planned isolations, emergency response and Authorised Person services across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
