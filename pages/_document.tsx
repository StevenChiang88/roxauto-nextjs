import { Head, Html, Main, NextScript } from "next/document";
import { COMPANY_NAME, CONTACT_EMAIL, FACEBOOK_URL, SITE_URL } from "../lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rox Auto Parts",
  alternateName: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/static/images/roxicon.png`,
  foundingDate: "1976",
  email: CONTACT_EMAIL,
  address: { "@type": "PostalAddress", addressCountry: "TW" },
  sameAs: [FACEBOOK_URL],
};

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
