import HealthSafety from "@/legacy-pages/HealthSafety";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Safety | EntireFM Standards",
  description: "Safety is our priority. Learn about EntireFM's rigorous health and safety standards and compliance frameworks.",
};

export default function HealthSafetyPage() {
  return <HealthSafety />;
}
