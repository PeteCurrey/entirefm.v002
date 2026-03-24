import SmartMetering from "@/legacy-pages/services/SmartMetering";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Metering & Submeter Installation | Tenant Billing | ESOS Compliance | EntireFM",
  description: "Smart metering and submeter installation for accurate consumption data across estates and tenants. Supporting ESOS, SECR compliance, and tenant billing accuracy.",
};

export default function SmartMeteringPage() {
  return <SmartMetering />;
}
