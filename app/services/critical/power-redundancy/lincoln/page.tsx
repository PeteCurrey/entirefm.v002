import Lincoln from "@/legacy-pages/services/critical/power-redundancy/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Lincoln | EntireFM",
  description: "Power redundancy testing for Lincoln healthcare and food processing facilities. N+1 validation and emergency supply verification for critical Lincolnshire operations.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
