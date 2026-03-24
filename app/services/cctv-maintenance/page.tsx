import CCTVMaintenance from "@/legacy-pages/services/CCTVMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTVMaintenance | EntireFM",
  description: "Professional CCTVMaintenance services by EntireFM.",
};

export default function CCTVMaintenancePage() {
  return <CCTVMaintenance />;
}
