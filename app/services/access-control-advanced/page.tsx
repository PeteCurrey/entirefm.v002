import AccessControlAdvanced from "@/legacy-pages/services/AccessControlAdvanced";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Access Control Systems | Card, Biometric & Integrated Solutions",
  description: "Card, fob, biometric and integrated building access solutions for controlled environments. Expert access control installation and maintenance.",
};

export default function AccessControlAdvancedPage() {
  return <AccessControlAdvanced />;
}
