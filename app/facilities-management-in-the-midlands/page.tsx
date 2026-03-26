import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("facilities-management-in-the-midlands");

export default function Page() {
  return <LocationPage slug="facilities-management-in-the-midlands" />;
}
