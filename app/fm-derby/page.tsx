import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-derby");

export default function Page() {
  return <LocationPage slug="fm-derby" />;
}
