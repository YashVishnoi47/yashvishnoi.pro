
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yourdomain.com/#yash-vishnoi",
        name: "Yash Vishnoi",
        url: "https://yashvishnoi.pro",
        jobTitle: "Full-Stack Developer",
        knowsAbout: [
          "AI Automation",
          "Voice AI",
          "Web Development",
          "Legal Tech",
        ],
        sameAs: [
          "https://twitter.com/yourtwitterhandle",
          "https://linkedin.com/in/yourlinkedinhandle",
          "https://github.com/YashVishnoi47",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://yourdomain.com/#legal-intake-os",
        name: "Legal Intake OS™",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "AI receptionist for law firms that answers calls 24/7, qualifies leads, books consultations, and syncs to your CRM automatically.",
        url: "https://yourdomain.com",
        image: "https://yourdomain.com/og-image.png",
        author: {
          "@id": "https://yourdomain.com/#yash-vishnoi",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "0",
          description:
            "Custom pricing based on firm size and call volume — book a call for a quote.",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: undefined, // remove this key entirely until you have real reviews
      },
      {
        "@type": "Service",
        "@id": "https://yourdomain.com/#service",
        serviceType: "AI Receptionist for Law Firms",
        provider: {
          "@id": "https://yourdomain.com/#yash-vishnoi",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        description:
          "24/7 AI-powered call answering, lead qualification, and consultation booking built specifically for law firms.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Legal Intake OS™ Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24/7 Live Call Answering",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lead Qualification",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Calendar-Based Consultation Booking",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CRM Synchronization",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}