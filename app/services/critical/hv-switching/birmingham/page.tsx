import Birmingham from "@/legacy-pages/services/critical/hv-switching/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Birmingham | EntireFM",
  description: "HV switching and isolation for Birmingham manufacturing, logistics and corporate estates. Authorised Person operations and emergency HV response across the West Midlands.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
