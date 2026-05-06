import SectorPage, { generateSectorMetadata } from "@/components/templates/SectorPage";

export const generateMetadata = () => generateSectorMetadata("service-station-fm");

export default function Page() {
  return <SectorPage slug="service-station-fm" />;
}
