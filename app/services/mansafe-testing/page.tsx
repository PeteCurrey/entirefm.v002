import MansafeTesting from "@/legacy-pages/services/MansafeTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mansafe & Fall Arrest System Testing | Working at Height Compliance",
  description: "Compliance testing for wire systems, posts, anchors and fixed fall protection. Expert mansafe testing under ACREP and HSE standards.",
};

export default function MansafeTestingPage() {
  return <MansafeTesting />;
}
