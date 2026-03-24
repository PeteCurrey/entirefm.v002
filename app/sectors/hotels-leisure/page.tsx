import HotelsLeisure from "@/legacy-pages/sectors/HotelsLeisure";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels & Leisure FM | Guest Experience Protection",
  description: "Seamless FM that protects service continuity, brand perception, hygiene standards, and guest satisfaction.",
};

export default function HotelsLeisurePage() {
  return <HotelsLeisure />;
}
