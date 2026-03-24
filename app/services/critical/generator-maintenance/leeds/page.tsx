import Leeds from "@/legacy-pages/services/critical/generator-maintenance/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Leeds | EntireFM",
  description: "Generator maintenance for Leeds financial, corporate and healthcare estates. Load bank testing, battery monitoring and emergency power validation across West Yorkshire.",
};

export default function LeedsPage() {
  return <Leeds />;
}
