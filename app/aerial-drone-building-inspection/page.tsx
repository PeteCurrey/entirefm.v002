import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("aerial-drone-building-inspection");

export default function Page() {
  return <ServicePage slug="aerial-drone-building-inspection" />;
}
