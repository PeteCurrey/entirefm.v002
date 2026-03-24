import LiftingEquipment from "@/legacy-pages/services/LiftingEquipment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifting Equipment Inspection & Testing (LOLER) | EntireFM",
  description: "LOLER-compliant lifting equipment inspection, testing and certification. Thorough examinations for hoists, lifts, cranes, MEWPs and all lifting accessories.",
};

export default function LiftingEquipmentPage() {
  return <LiftingEquipment />;
}
