import Derby from "@/legacy-pages/services/critical/power-quality/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Derby | EntireFM",
  description: "Power quality monitoring for Derby's rail and aerospace manufacturing. Harmonic analysis and voltage regulation testing protecting precision production equipment.",
};

export default function DerbyPage() {
  return <Derby />;
}
