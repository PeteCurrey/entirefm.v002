import Chesterfield from "@/legacy-pages/services/ppm/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Chesterfield | Planned Preventative Maintenance | Entire FM",
  description: "PPM for Chesterfield logistics estates. Safety and productivity protection preventing lost orders from downtime. Book PPM audit.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
