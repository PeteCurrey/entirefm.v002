import Manchester from "@/legacy-pages/services/critical/generator-maintenance/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Manchester | EntireFM",
  description: "Generator servicing for Manchester's PBSA, media and data centre estates. Load bank testing, ATS verification and fuel polishing across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
