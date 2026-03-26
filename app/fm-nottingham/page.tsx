import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-nottingham");

export default function Page() {
  return <LocationPage slug="fm-nottingham" />;
}
