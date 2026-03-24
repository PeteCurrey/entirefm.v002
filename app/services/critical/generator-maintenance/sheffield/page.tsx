import Sheffield from "@/legacy-pages/services/critical/generator-maintenance/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Sheffield | EntireFM",
  description: "Generator maintenance for Sheffield's steel, manufacturing and logistics operations. Load bank testing and fuel system servicing protecting production uptime across South Yorkshire.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
