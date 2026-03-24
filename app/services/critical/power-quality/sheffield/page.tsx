import Sheffield from "@/legacy-pages/services/critical/power-quality/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Sheffield | EntireFM",
  description: "Power quality testing for Sheffield steel, manufacturing and industrial estates. THD analysis, voltage sag detection and power factor correction across South Yorkshire.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
