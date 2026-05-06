import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("airport-facilities-management");

export default function Page() {
  return <ServicePage slug="airport-facilities-management" />;
}
