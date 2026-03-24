import Sectors from "@/legacy-pages/Sectors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Different environments. Same reliability. | EntireFM Sectors",
  description: "Sector-specific understanding meets consistent delivery standards. We adapt our approach to your environment without compromising on quality.",
};

export default function SectorsPage() {
  return <Sectors />;
}
