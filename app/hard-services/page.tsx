import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("hard-services");

export default function Page() {
  return <ServicePage slug="hard-services" />;
}
