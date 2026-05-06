import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("commercial-facilities-management");

export default function Page() {
  return <ServicePage slug="commercial-facilities-management" />;
}
