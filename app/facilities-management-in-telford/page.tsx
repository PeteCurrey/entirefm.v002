import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("facilities-management-in-telford");

export default function Page() {
  return <LocationPage slug="facilities-management-in-telford" />;
}
