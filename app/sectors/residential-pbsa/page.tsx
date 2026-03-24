import ResidentialPBSA from "@/legacy-pages/sectors/ResidentialPBSA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential & PBSA FM | Student Accommodation & Block Management",
  description: "Combined FM services for residential blocks and student accommodation. High-density compliance management.",
};

export default function ResidentialPBSAPage() {
  return <ResidentialPBSA />;
}
