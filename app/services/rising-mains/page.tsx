import RisingMains from "@/legacy-pages/services/RisingMains";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rising Mains Testing & Maintenance | BS 9990 Compliance | Entire FM",
  description: "Expert rising mains testing for wet and dry systems. BS 9990 compliance, flow testing, landing valve checks, and pressure integrity verification for high-rise firefighting infrastructure.",
};

export default function RisingMainsPage() {
  return <RisingMains />;
}
