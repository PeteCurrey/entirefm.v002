import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("plumbing-gas");

export default function Page() {
  return <ServicePage slug="plumbing-gas" />;
}
