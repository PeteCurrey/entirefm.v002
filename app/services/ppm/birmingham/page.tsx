import Birmingham from "@/legacy-pages/services/ppm/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Birmingham | Planned Preventative Maintenance | Entire FM",
  description: "Integrated PPM for Birmingham logistics and manufacturing estates. Fire, HVAC, electrical, water & gas compliance in one proactive programme. Build PPM plan.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
