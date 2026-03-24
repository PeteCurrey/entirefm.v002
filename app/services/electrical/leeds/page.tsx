import Leeds from "@/legacy-pages/services/electrical/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Compliance Leeds | EICR Testing & Remedials",
  description: "EICR testing and remedial resolution protecting Leeds corporate, retail and public estates from electrical risk and costly downtime.",
};

export default function LeedsPage() {
  return <Leeds />;
}
