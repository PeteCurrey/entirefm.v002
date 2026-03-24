import DrainageCCTVSurveys from "@/legacy-pages/services/DrainageCCTVSurveys";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drainage CCTV Surveys | High-Definition Remote Drainage Inspection",
  description: "High-definition remote inspection of internal and external drainage infrastructure. Expert drainage CCTV surveys, jetting integration, and defect reporting.",
};

export default function DrainageCCTVSurveysPage() {
  return <DrainageCCTVSurveys />;
}
