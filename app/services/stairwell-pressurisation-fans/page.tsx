import StairwellPressurisationFans from "@/legacy-pages/services/StairwellPressurisationFans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stairwell Pressurisation Systems | BS EN 12101-6 Testing | Entire FM",
  description: "Expert stairwell pressurisation system testing and maintenance. Ensure compliant pressure-controlled escape routes with annual fan duty verification and differential checks.",
};

export default function StairwellPressurisationFansPage() {
  return <StairwellPressurisationFans />;
}
