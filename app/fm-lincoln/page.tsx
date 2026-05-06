import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-lincoln");

export default function Page() {
  return <LocationPage slug="fm-lincoln" />;
}
