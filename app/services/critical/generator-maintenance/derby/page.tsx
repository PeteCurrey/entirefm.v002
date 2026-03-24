import Derby from "@/legacy-pages/services/critical/generator-maintenance/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Derby | EntireFM",
  description: "Generator maintenance and load bank testing for Derby's rail, aerospace and manufacturing sector. Preventive servicing and emergency power validation across Derbyshire.",
};

export default function DerbyPage() {
  return <Derby />;
}
