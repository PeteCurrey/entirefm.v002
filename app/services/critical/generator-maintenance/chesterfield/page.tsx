import Chesterfield from "@/legacy-pages/services/critical/generator-maintenance/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Chesterfield | EntireFM",
  description: "Generator maintenance for Chesterfield logistics and distribution centres along the M1 corridor. Load bank testing and ATS validation with minimal operational disruption.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
