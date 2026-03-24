import HardServicesFM from "@/legacy-pages/services/HardServicesFM";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Hard FM Services UK | M&E, HVAC & Statutory Compliance | EntireFM',
  description: 'EntireFM delivers expert hard facilities management across the UK — mechanical and electrical services, HVAC, fire safety systems, emergency lighting, and building fabric maintenance.',
  alternates: {
    canonical: 'https://www.entirefm.com/services/hard-fm',
  },
};

export default function HardServicesFMPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hard FM Services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "United Kingdom",
    "description": "EntireFM delivers expert hard facilities management across the UK — mechanical and electrical services, HVAC, fire safety systems, emergency lighting, and building fabric maintenance.",
    "serviceType": "Hard FM"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HardServicesFM />
    </>
  );
}
