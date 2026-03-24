import EnergyAudits from "@/legacy-pages/services/EnergyAudits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Audits & Building Performance Reviews | ESOS Compliance | EntireFM",
  description: "Energy audits identifying hidden inefficiencies in HVAC, lighting, controls and plant systems. ESOS-compliant assessments reducing operational costs and carbon footprint.",
};

export default function EnergyAuditsPage() {
  return <EnergyAudits />;
}
