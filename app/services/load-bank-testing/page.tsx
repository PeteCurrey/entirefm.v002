import LoadBankTesting from "@/legacy-pages/services/LoadBankTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Load Bank Testing | Generator & UPS Performance Verification | Entire FM",
  description: "Specialist load bank testing for generators and UPS systems. Resistive/reactive load testing, thermal profiling, full reporting, and integration with generator maintenance programs.",
};

export default function LoadBankTestingPage() {
  return <LoadBankTesting />;
}
