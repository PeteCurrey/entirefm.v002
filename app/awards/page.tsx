import Awards from "@/legacy-pages/Awards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Recognition | EntireFM Excellence",
  description: "Our commitment to excellence in facilities management has been recognized across the industry through prestigious awards and certifications.",
};

export default function AwardsPage() {
  return <Awards />;
}
