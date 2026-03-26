import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("retail-facilities-management");

export default function Page() {
  return <SectorPage slug="retail-facilities-management" />;
}
