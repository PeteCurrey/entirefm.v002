import MEWPSafetyChecks from "@/legacy-pages/services/MEWPSafetyChecks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEWP & High-Level Access Safety Checks | PUWER/LOLER Compliance",
  description: "PUWER/LOLER compliance for powered access equipment. Expert MEWP inspection and work at height safety.",
};

export default function MEWPSafetyChecksPage() {
  return <MEWPSafetyChecks />;
}
