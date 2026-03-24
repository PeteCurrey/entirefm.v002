import Sheffield from "@/legacy-pages/services/fire/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Sheffield | Local Testing & Statutory Compliance | EntireFM",
  description: "Fire compliance for Sheffield's heavy industrial, logistics and residential tower sites. Expert BS 5839 testing with manufacturing heritage knowledge.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
