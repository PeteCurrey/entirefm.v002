import PlantRoomRiskAssessments from "@/legacy-pages/services/PlantRoomRiskAssessments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plant Room Risk Assessments | Mechanical & Electrical Hazards | Entire FM",
  description: "Comprehensive plant room risk assessments identifying operational, electrical, thermal, and fire risks. Control measures for machinery, stored energy, hot works, and confined spaces.",
};

export default function PlantRoomRiskAssessmentsPage() {
  return <PlantRoomRiskAssessments />;
}
