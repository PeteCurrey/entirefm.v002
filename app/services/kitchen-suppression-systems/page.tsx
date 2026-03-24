import KitchenSuppressionSystems from "@/legacy-pages/services/KitchenSuppressionSystems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Fire Suppression Systems | Ansul & PAFSS | Entire FM",
  description: "Expert kitchen fire suppression system installation and maintenance. Wet chemical automatic suppression for commercial catering to NFPA 17A and BS 5306 standards.",
};

export default function KitchenSuppressionSystemsPage() {
  return <KitchenSuppressionSystems />;
}
