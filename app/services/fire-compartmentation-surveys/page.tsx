import FireCompartmentationSurveys from "@/legacy-pages/services/FireCompartmentationSurveys";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Compartmentation Surveys | Breach Detection & Risk Reports | Entire FM",
  description: "Specialist fire compartmentation surveys identifying breaches in fire separation. Thermal imaging, penetration sealing assessment, and actionable risk reports for Fire Safety Act compliance.",
};

export default function FireCompartmentationSurveysPage() {
  return <FireCompartmentationSurveys />;
}
