import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-london");

export default function Page() {
  return <LocationPage slug="fm-london" />;
}
