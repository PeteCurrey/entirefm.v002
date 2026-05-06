import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-chesterfield");

export default function Page() {
  return <LocationPage slug="fm-chesterfield" />;
}
