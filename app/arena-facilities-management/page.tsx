import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("arena-facilities-management");

export default function Page() {
  return <SectorPage slug="arena-facilities-management" />;
}
