import Plumbing from "@/legacy-pages/services/Plumbing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Plumbing & Gas Safety UK | CP42 Certification | EntireFM",
  description: "Gas Safe registered plumbing and gas safety services. CP42 certification, boiler servicing, emergency call-outs, and compliance management for commercial buildings.",
};

export default function PlumbingPage() {
  return <Plumbing />;
}
