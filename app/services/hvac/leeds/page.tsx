import Leeds from "@/legacy-pages/services/hvac/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Compliance in Leeds | TM44 & F-Gas Services | Entire FM",
  description: "Corporate and retail HVAC compliance in Leeds. TM44 audits, AHU servicing and F-Gas infrastructure management. Book audit.",
};

export default function LeedsPage() {
  return <Leeds />;
}
