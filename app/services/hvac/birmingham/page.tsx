import Birmingham from "@/legacy-pages/services/hvac/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Birmingham | TM44 & F-Gas Services | Entire FM",
  description: "Industrial HVAC maintenance, TM44 audits and F-Gas compliance for Birmingham estates. Retail and logistics cooling optimization. Book audit.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
