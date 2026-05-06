import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("industrial-cleaning");

export default function Page() {
  return <ServicePage slug="industrial-cleaning" />;
}
