import Nottingham from "@/legacy-pages/services/hvac/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Nottingham | TM44 & F-Gas Services | Entire FM",
  description: "PBSA and leisure HVAC compliance in Nottingham. TM44 audits, refrigerant management and air quality monitoring. Book review.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
