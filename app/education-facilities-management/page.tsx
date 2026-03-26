import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("education-facilities-management");

export default function Page() {
  return <SectorPage slug="education-facilities-management" />;
}
