import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-liverpool");

export default function Page() {
  return <LocationPage slug="fm-liverpool" />;
}
