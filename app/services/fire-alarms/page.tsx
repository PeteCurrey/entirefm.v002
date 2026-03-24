import FireAlarms from "@/legacy-pages/services/FireAlarms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Alarm Maintenance & BS 5839 Compliance UK | EntireFM",
  description: "BS 5839 certified fire alarm testing, maintenance and 24/7 emergency response. Protecting people, property and legal liability across UK commercial estates.",
};

export default function FireAlarmsPage() {
  return <FireAlarms />;
}
