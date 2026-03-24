import Lincoln from "@/legacy-pages/services/hvac/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Lincoln | TM44 & F-Gas Services | Entire FM",
  description: "Healthcare and heritage HVAC compliance in Lincoln. Sensitive IAQ oversight, TM44 audits and energy optimization. Request TM44 inspection.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
