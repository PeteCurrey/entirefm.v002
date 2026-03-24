import Leeds from "@/legacy-pages/services/critical/hv-switching/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Leeds | EntireFM",
  description: "HV switching for Leeds financial services, university campuses and corporate offices. Planned isolations and load transfers by qualified Authorised Persons.",
};

export default function LeedsPage() {
  return <Leeds />;
}
