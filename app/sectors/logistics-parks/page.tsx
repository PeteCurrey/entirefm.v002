import LogisticsParks from "@/legacy-pages/sectors/LogisticsParks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics Parks FM | Distribution & Warehouse Services",
  description: "FM for logistics parks and distribution centres. Large-scale compliance across widespread estates.",
};

export default function LogisticsParksPage() {
  return <LogisticsParks />;
}
