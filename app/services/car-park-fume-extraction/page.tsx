import CarParkFumeExtraction from "@/legacy-pages/services/CarParkFumeExtraction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Park & Loading Bay Fume Extraction | CO Monitoring Compliance",
  description: "CO/NOx ventilation systems for enclosed car parks and loading bays. Expert fume extraction and workplace safety compliance.",
};

export default function CarParkFumeExtractionPage() {
  return <CarParkFumeExtraction />;
}
