import Sheffield from "@/legacy-pages/services/hvac/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Sheffield | TM44 & F-Gas Services | Entire FM",
  description: "Industrial HVAC compliance in Sheffield. TM44 audits, process cooling and F-Gas leak detection. Energy performance improvements. Book audit.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
