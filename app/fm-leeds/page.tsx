import LocationPage, { generateLocationMetadata } from "@/components/templates/LocationPage";

export const generateMetadata = () => generateLocationMetadata("fm-leeds");

export default function Page() {
  return <LocationPage slug="fm-leeds" />;
}
