import Chesterfield from "@/legacy-pages/services/hvac/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Chesterfield | TM44 & F-Gas Services | Entire FM",
  description: "Logistics HVAC compliance in Chesterfield. Warehouse cooling, TM44 audits and F-Gas leak detection. Energy efficiency focus. Book survey.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
