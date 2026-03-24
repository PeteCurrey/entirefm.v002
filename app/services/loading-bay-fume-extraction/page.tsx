import LoadingBayFumeExtraction from "@/legacy-pages/services/LoadingBayFumeExtraction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading Bay Fume Extraction Systems | COSHH Compliance | Entire FM",
  description: "Expert loading bay fume extraction system maintenance. Protecting enclosed logistics spaces from exhaust build-up with duty/standby fan checks and sensor testing.",
};

export default function LoadingBayFumeExtractionPage() {
  return <LoadingBayFumeExtraction />;
}
