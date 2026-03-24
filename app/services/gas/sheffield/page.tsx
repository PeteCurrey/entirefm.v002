import Sheffield from "@/legacy-pages/services/gas/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Sheffield | Local Testing & Statutory Compliance | EntireFM",
  description: "Industrial heat systems gas compliance in Sheffield. Strict GS(I&U) Regs enforcement, CO risk removal, and energy upgrades for high-load plants.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
