import Nottingham from "@/legacy-pages/services/ppm/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Nottingham | Planned Preventative Maintenance | Entire FM",
  description: "PPM for Nottingham PBSA and leisure estates. Proactive asset management prevents customer-facing failures. Build custom PPM plan.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
