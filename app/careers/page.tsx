import Careers from "@/legacy-pages/Careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Careers | Join the EntireFM Team",
  description: "Join a facilities management company that invests in its team. Explore open roles for engineers, helpdesk, and management.",
};

export default function CareersPage() {
  return <Careers />;
}
