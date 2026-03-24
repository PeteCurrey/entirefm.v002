import Suppliers from "@/legacy-pages/Suppliers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supplier & Specialist Partner Hub | EntireFM",
  description: "Join the EntireFM specialist supply chain. We partner with qualified engineers and contractors who meet our governance and safety standards.",
};

export default function SuppliersPage() {
  return <Suppliers />;
}
