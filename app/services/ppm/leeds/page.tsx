import Leeds from "@/legacy-pages/services/ppm/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Leeds | Planned Preventative Maintenance | Entire FM",
  description: "PPM safeguarding corporate HQ operations in Leeds. Fire, HVAC, electrical, gas, water bundled in one governance platform. Book PPM assessment.",
};

export default function LeedsPage() {
  return <Leeds />;
}
