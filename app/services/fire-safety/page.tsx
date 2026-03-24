import FireSafety from "@/legacy-pages/services/FireSafety";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance & Testing | BS 5839, BS 5266 | EntireFM",
  description: "Expert fire alarm testing, emergency lighting, sprinklers & fire risk assessments. BS 5839, BS 5266 & BS 5306 compliant. Nationwide coverage with 24/7 emergency response.",
};

export default function FireSafetyPage() {
  return <FireSafety />;
}
