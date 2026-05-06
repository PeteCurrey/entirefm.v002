import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("landmark-facilities-management");

export default function Page() {
  return <SectorPage slug="landmark-facilities-management" />;
}
