import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("hvac-contractor");

export default function Page() {
  return <ServicePage slug="hvac-contractor" />;
}
