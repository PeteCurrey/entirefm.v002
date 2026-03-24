import Leeds from "@/legacy-pages/services/critical/ups-maintenance/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Leeds | EntireFM",
  description: "UPS servicing for Leeds financial services, corporate offices and university data rooms. Battery impedance testing and preventive maintenance across West Yorkshire.",
};

export default function LeedsPage() {
  return <Leeds />;
}
