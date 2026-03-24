import AccessControl from "@/legacy-pages/services/AccessControl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AccessControl | EntireFM",
  description: "Professional AccessControl services by EntireFM.",
};

export default function AccessControlPage() {
  return <AccessControl />;
}
