import Sheffield from "@/legacy-pages/services/electrical/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Compliance Sheffield | Industrial EICR Testing",
  description: "Compliance-driven electrical testing & remedials built for Sheffield's industrial and retail infrastructure.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
