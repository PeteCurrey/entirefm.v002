import AHUFireInterlockTesting from "@/legacy-pages/services/AHUFireInterlockTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AHU Fire Interlock Testing | Fire Damper Compliance | Entire FM",
  description: "Expert AHU fire interlock testing. Ensuring air handling units shut down correctly on fire alarm activation with damper behaviour and BMS integration checks.",
};

export default function AHUFireInterlockTestingPage() {
  return <AHUFireInterlockTesting />;
}
