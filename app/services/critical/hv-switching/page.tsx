import HVSwitching from "@/legacy-pages/services/critical/HVSwitching";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Authorised Personnel Services",
  description: "High-voltage switching operations by qualified Authorised Persons. Planned maintenance, emergency response, load transfers, and isolation procedures for critical infrastructure.",
};

export default function HVSwitchingPage() {
  return <HVSwitching />;
}
