import HeightSafety from "@/legacy-pages/services/HeightSafety";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Height Safety Systems Inspection & Testing | EntireFM",
  description: "Work at Height Regulations compliant inspection of fall protection systems, anchor points, lifelines and height safety equipment. Expert certification services.",
};

export default function HeightSafetyPage() {
  return <HeightSafety />;
}
