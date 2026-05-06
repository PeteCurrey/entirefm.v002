import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("safety-critical-emergency-systems");

export default function Page() {
  return <ServicePage slug="safety-critical-emergency-systems" />;
}
