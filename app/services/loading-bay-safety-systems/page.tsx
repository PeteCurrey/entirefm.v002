import LoadingBaySafetySystems from "@/legacy-pages/services/LoadingBaySafetySystems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading Bay Safety Systems | Roller Shutters, Traffic & Dock Safety",
  description: "Roller shutters, dock lights, traffic systems and interlocks for industrial estates. Expert loading bay safety and PUWER compliance.",
};

export default function LoadingBaySafetySystemsPage() {
  return <LoadingBaySafetySystems />;
}
