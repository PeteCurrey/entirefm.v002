import Leeds from "@/legacy-pages/services/critical/power-redundancy/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Leeds | EntireFM",
  description: "Power redundancy testing for Leeds financial services, corporate offices and data centres. N+1 validation and ATS changeover testing across West Yorkshire.",
};

export default function LeedsPage() {
  return <Leeds />;
}
