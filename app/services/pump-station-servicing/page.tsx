import PumpStationServicing from "@/legacy-pages/services/PumpStationServicing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pump Station Servicing | Foul & Surface Water Pump Maintenance",
  description: "Commercial foul & surface water pump station servicing, monitoring and compliance. Expert pump station maintenance and environmental compliance.",
};

export default function PumpStationServicingPage() {
  return <PumpStationServicing />;
}
