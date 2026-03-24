import ANPRSystems from "@/legacy-pages/services/ANPRSystems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANPRSystems | EntireFM",
  description: "Professional ANPRSystems services by EntireFM.",
};

export default function ANPRSystemsPage() {
  return <ANPRSystems />;
}
