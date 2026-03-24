import Lincoln from "@/legacy-pages/services/critical/hv-switching/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Lincoln | EntireFM",
  description: "HV switching and isolation by Authorised Persons for Lincoln healthcare, food processing and agricultural estates. Safe high-voltage operations across Lincolnshire.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
