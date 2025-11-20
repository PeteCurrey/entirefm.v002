import { Helmet } from "react-helmet";

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
}

export const ServiceSchema = ({ name, description, provider, areaServed }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "telephone": "+44-800-XXX-XXXX",
      "url": "https://entirefm.com"
    },
    "areaServed": areaServed,
    "serviceType": "Facilities Management"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface LocalBusinessSchemaProps {
  name: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export const LocalBusinessSchema = ({ name, address }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    "telephone": "+44-800-XXX-XXXX"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
