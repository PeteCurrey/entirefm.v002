import Derby from "@/legacy-pages/services/ppm/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Derby | Planned Preventative Maintenance | Entire FM",
  description: "PPM for Derby aerospace and engineering estates. Total reliability for production and public access. Schedule PPM review.",
};

export default function DerbyPage() {
  return <Derby />;
}
