import Sheffield from "@/legacy-pages/services/critical/data-room-audits/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Sheffield | EntireFM",
  description: "Data room audits for Sheffield manufacturing and industrial IT infrastructure. Power, cooling and fire suppression assessments for South Yorkshire comms rooms.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
