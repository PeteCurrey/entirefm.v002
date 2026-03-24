import Sheffield from "@/legacy-pages/services/ppm/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in Sheffield | Planned Preventative Maintenance | Entire FM",
  description: "Industrial PPM for Sheffield manufacturing estates. Predictive maintenance and full compliance management. Protect asset availability.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
