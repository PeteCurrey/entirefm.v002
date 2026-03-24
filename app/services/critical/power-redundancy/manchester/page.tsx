import Manchester from "@/legacy-pages/services/critical/power-redundancy/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Manchester | EntireFM",
  description: "Power redundancy testing for Manchester data centres, PBSA and media estates. N+1 validation, dual-feed verification and failover simulation across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
