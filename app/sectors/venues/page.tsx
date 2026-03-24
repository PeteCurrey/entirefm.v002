import Venues from "@/legacy-pages/sectors/Venues";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leisure & Event Venue FM | High-Footfall Compliance",
  description: "FM for stadiums, arenas, and large-scale event venues. Crowd safety and mission-critical system reliability.",
};

export default function VenuesPage() {
  return <Venues />;
}
