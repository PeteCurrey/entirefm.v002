import Lincoln from "@/legacy-pages/services/ppm/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Lincoln | Planned Preventative Maintenance | Entire FM",
  description: "PPM for Lincoln healthcare and heritage estates. Integrated maintenance with digital compliance governance. Build long-term maintenance plan.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
