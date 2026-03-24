import Leeds from "@/legacy-pages/services/critical/data-room-audits/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Leeds | EntireFM",
  description: "Data room audits for Leeds financial services and corporate IT environments. Power, cooling and fire suppression validation across West Yorkshire.",
};

export default function LeedsPage() {
  return <Leeds />;
}
