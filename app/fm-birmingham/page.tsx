import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-birmingham");

export default function Page() {
  return <LocationPage slug="fm-birmingham" />;
}
