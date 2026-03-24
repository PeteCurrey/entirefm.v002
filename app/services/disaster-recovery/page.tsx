import DisasterRecovery from "@/legacy-pages/services/DisasterRecovery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Disaster Recovery Services | Fire Flood Impact Damage | EntireFM",
  description: "Estate disaster recovery services for fire, flood, impact damage and major system failures. Structural, building services and system recovery with insurance coordination.",
};

export default function DisasterRecoveryPage() {
  return <DisasterRecovery />;
}
