import EmergencyResponse from "@/legacy-pages/services/EmergencyResponse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Response & Critical Incident Management | 24/7 | EntireFM",
  description: "24/7 emergency response for FM emergencies. Coordinated response for water leaks, electrical failures, fire alarms, and plant breakdowns with immediate dispatch.",
};

export default function EmergencyResponsePage() {
  return <EmergencyResponse />;
}
