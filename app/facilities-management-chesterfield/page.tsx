import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("facilities-management-chesterfield");

export default function Page() {
  return <LocationPage slug="facilities-management-chesterfield" />;
}
