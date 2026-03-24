import BuildingFabric from "@/legacy-pages/services/BuildingFabric";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Fabric Repairs & Maintenance UK | EntireFM",
  description: "Commercial building fabric maintenance, repairs, and refurbishment. Internal repairs, fire doors, joinery, decoration, and accessibility works across the UK.",
};

export default function BuildingFabricPage() {
  return <BuildingFabric />;
}
