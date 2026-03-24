import CarParkSmokeControl from "@/legacy-pages/services/CarParkSmokeControl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Park Smoke & Fume Extraction | BS 7346 Testing | Entire FM",
  description: "Expert car park smoke control and fume extraction system testing. Jet fan systems, CO sensor calibration, and fire override testing to BS 7346 standards.",
};

export default function CarParkSmokeControlPage() {
  return <CarParkSmokeControl />;
}
