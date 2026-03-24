import Birmingham from "@/legacy-pages/services/critical/generator-maintenance/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Birmingham | EntireFM",
  description: "Diesel generator servicing, load bank testing and ATS verification for Birmingham hospitals, data centres and logistics hubs across the West Midlands.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
