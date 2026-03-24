import Sheffield from "@/legacy-pages/services/critical/hv-switching/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Sheffield | EntireFM",
  description: "HV switching and isolation for Sheffield's heavy industrial and steel sector. Authorised Person operations, load transfers and emergency response across South Yorkshire.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
