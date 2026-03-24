import Sprinklers from "@/legacy-pages/services/Sprinklers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprinkler & Dry Riser Testing UK (BS EN 12845)",
  description: "Full fire suppression maintenance for safety-critical sites.",
};

export default function SprinklersPage() {
  return <Sprinklers />;
}
