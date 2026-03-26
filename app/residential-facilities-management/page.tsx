import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("residential-facilities-management");

export default function Page() {
  return <SectorPage slug="residential-facilities-management" />;
}
