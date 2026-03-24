import Lincoln from "@/legacy-pages/services/critical/generator-maintenance/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Lincoln | EntireFM",
  description: "Generator maintenance for Lincoln healthcare, food processing and agricultural estates. Emergency power servicing and load testing for rural and remote Lincolnshire facilities.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
