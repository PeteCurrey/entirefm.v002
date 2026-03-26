import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("hotel-facilities-management");

export default function Page() {
  return <SectorPage slug="hotel-facilities-management" />;
}
