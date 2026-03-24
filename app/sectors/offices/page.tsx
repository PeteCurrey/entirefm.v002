import Offices from "@/legacy-pages/sectors/Offices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Facilities Management | Business Parks & Corporate FM",
  description: "Commercial office FM services including planned maintenance, reactive repairs, and statutory compliance. Keeping workplaces safe, productive, and audit-ready.",
};

export default function OfficesPage() {
  return <Offices />;
}
