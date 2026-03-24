import Chesterfield from "@/legacy-pages/services/critical/data-room-audits/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Chesterfield | EntireFM",
  description: "Data room audits for Chesterfield logistics and distribution centre IT rooms. Cooling, power and connectivity assessments for M1 corridor operations.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
