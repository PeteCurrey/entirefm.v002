import Contact from "@/legacy-pages/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EntireFM | 24/7 Facilities Management Support",
  description: "Get in touch with EntireFM. 24/7 helpdesk, Nationwide engine coverage, and expert FM support for your estate.",
};

export default function ContactPage() {
  return <Contact />;
}
