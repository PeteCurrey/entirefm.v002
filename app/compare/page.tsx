import Compare from "@/legacy-pages/Compare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare FM Providers | EntireFM vs The Market",
  description: "Compare EntireFM with traditional, large-scale, and in-house FM models. Focus on decision speed, accountability, and cost transparency.",
};

export default function ComparePage() {
  return <Compare />;
}
