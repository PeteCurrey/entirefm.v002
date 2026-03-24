import Manchester from "@/legacy-pages/services/hvac/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Manchester | TM44 & F-Gas Services | Entire FM",
  description: "TM44 audits, F-Gas compliance and IAQ monitoring for Manchester PBSA and corporate estates. Digital governance platform included.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
