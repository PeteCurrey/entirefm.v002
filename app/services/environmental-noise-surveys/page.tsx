import EnvironmentalNoiseSurveys from "@/legacy-pages/services/EnvironmentalNoiseSurveys";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Noise Surveys | BS4142 Compliance | Mechanical Plant Noise | EntireFM",
  description: "Environmental noise surveys for mechanical plant and building services. BS4142 assessments, planning compliance, and noise mitigation for commercial and industrial estates.",
};

export default function EnvironmentalNoiseSurveysPage() {
  return <EnvironmentalNoiseSurveys />;
}
