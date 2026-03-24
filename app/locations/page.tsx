import Locations from "@/legacy-pages/Locations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | Nationwide FM Coverage Across the UK",
  description: "EntireFM provides nationwide facilities management from our regional hubs. Local expertise with national scale.",
};

export default function LocationsPage() {
  return <Locations />;
}
