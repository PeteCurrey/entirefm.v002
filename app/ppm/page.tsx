import ServicePage, { generateServiceMetadata } from "@/components/templates/ServicePage";

export const generateMetadata = () => generateServiceMetadata("ppm");

export default function Page() {
  return <ServicePage slug="ppm" />;
}
