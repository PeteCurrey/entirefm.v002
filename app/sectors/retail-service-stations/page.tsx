import RetailServiceStations from "@/legacy-pages/sectors/RetailServiceStations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & Service Station FM | Forecourt & Retail Hubs",
  description: "Specialist FM for service stations, forecourts, and retail hubs. Fire, electrical, and environment compliance.",
};

export default function RetailServiceStationsPage() {
  return <RetailServiceStations />;
}
