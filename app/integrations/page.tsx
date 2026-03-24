import Integrations from "@/legacy-pages/Integrations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration Hub & System Compatibility Suite | EntireFM",
  description: "Seamless FM delivery into your existing compliance and job management platforms including eLogbooks, Dwellant, Verisae, MRI/Qube, Planon and more.",
};

export default function IntegrationsPage() {
  return <Integrations />;
}
