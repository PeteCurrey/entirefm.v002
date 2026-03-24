import Leadership from "@/legacy-pages/Leadership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Leadership & Governance | EntireFM",
  description: "Meet the EntireFM leadership team. Directors who answer the phone and own performance. FM accountability that starts at the top.",
};

export default function LeadershipPage() {
  return <Leadership />;
}
