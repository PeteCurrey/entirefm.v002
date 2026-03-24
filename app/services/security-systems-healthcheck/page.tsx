import SecuritySystemsHealthcheck from "@/legacy-pages/services/SecuritySystemsHealthcheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Security Systems Health Check | Whole-Site Security Assessment",
  description: "Whole-site assessments covering CCTV, access control, alarms, barriers and ANPR. Expert security system health checks and compliance audits.",
};

export default function SecuritySystemsHealthcheckPage() {
  return <SecuritySystemsHealthcheck />;
}
