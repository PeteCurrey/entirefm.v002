import NetZeroRoadmaps from "@/legacy-pages/services/NetZeroRoadmaps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Reduction & Net Zero Strategy | SECR | ESG Roadmaps | EntireFM",
  description: "Carbon reduction and net zero roadmaps reducing energy intensity and decarbonising estate operations. Supporting SECR compliance and ESG commitments.",
};

export default function NetZeroRoadmapsPage() {
  return <NetZeroRoadmaps />;
}
