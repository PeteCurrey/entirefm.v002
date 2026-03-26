import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-sheffield");

export default function Page() {
  return <LocationPage slug="fm-sheffield" />;
}
