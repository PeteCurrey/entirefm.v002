import Manchester from "@/legacy-pages/services/ppm/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Manchester | Planned Preventative Maintenance | Entire FM",
  description: "Integrated PPM for Manchester student and hospitality estates. Protect reputation and revenue with proactive maintenance across essential services. Create schedule.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
