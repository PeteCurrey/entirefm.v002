import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("healthcare-facilities-management");

export default function Page() {
  return <SectorPage slug="healthcare-facilities-management" />;
}
