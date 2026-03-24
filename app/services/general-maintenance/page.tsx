import GeneralMaintenance from "@/legacy-pages/services/GeneralMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Maintenance & Handyman Services | Commercial | EntireFM",
  description: "Commercial general maintenance and handyman services. Fixtures, furniture assembly, signage, snagging, carpentry, and day-to-day repairs across the UK.",
};

export default function GeneralMaintenancePage() {
  return <GeneralMaintenance />;
}
