import Derby from "@/legacy-pages/services/hvac/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Derby | TM44 & F-Gas Services | Entire FM",
  description: "Transport and manufacturing HVAC compliance in Derby. TM44 certification, AHU and VRF maintenance. Zero downtime focus. Book F-Gas check.",
};

export default function DerbyPage() {
  return <Derby />;
}
