import Manchester from "@/legacy-pages/services/electrical/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Compliance Manchester | EICR Testing & PBSA Safety",
  description: "EICR testing for Manchester PBSA, Trafford Park industrial, and Salford Quays commercial estates. Protect student accommodation and business operations.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
