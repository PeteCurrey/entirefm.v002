import Chesterfield from "@/legacy-pages/services/critical/lightning-protection/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Chesterfield | EntireFM",
  description: "BS EN 62305 lightning protection testing in Chesterfield. Earth resistance and strike path testing for North Derbyshire commercial buildings.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
