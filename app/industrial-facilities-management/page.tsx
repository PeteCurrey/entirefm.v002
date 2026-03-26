import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("industrial-facilities-management");

export default function Page() {
  return <SectorPage slug="industrial-facilities-management" />;
}
