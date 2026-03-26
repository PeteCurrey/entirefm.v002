import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-manchester");

export default function Page() {
  return <LocationPage slug="fm-manchester" />;
}
