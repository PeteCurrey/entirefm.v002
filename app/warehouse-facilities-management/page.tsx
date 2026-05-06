import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("warehouse-facilities-management");

export default function Page() {
  return <SectorPage slug="warehouse-facilities-management" />;
}
