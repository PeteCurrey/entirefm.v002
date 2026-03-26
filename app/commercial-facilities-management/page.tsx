import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("commercial-facilities-management");

export default function Page() {
  return <SectorPage slug="commercial-facilities-management" />;
}
