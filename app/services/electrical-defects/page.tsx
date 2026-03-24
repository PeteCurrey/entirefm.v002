import ElectricalDefects from "@/legacy-pages/services/ElectricalDefects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Fault Finding & Remedial Works | EntireFM",
  description: "Commercial electrical fault finding and remedial works. NICEIC-approved engineers for circuit faults, lighting repairs, power loss, and BS 7671 certified remedials.",
};

export default function ElectricalDefectsPage() {
  return <ElectricalDefects />;
}
