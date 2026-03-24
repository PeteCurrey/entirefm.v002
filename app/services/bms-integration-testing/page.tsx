import BMSIntegrationTesting from "@/legacy-pages/services/BMSIntegrationTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMS Integration Testing | Fire Safety System Testing | Entire FM",
  description: "Critical BMS integration testing ensuring fire safety compliance. AHU shut-down verification, damper control, fire alarm integration, and BMS logic sequencing tests.",
};

export default function BMSIntegrationTestingPage() {
  return <BMSIntegrationTesting />;
}
