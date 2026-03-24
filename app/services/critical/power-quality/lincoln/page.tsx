import Lincoln from "@/legacy-pages/services/critical/power-quality/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Lincoln | EntireFM",
  description: "Power quality analysis for Lincoln healthcare and food processing facilities. Voltage monitoring and harmonic testing protecting sensitive medical and production equipment.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
