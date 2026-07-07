import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL } from "../lib/site";

interface SeoProps {
  title: string;
  description: string;
}

/** Per-page SEO: title, description, canonical, Open Graph and hreflang. */
export default function Seo({ title, description }: SeoProps) {
  const { asPath, locale, locales, defaultLocale } = useRouter();
  const path = asPath === "/" ? "" : asPath;
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content="Rox Auto Parts" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/static/images/roxicon.png`} />
      <meta name="twitter:card" content="summary" />
      {locales?.map((lng) => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={`${SITE_URL}${lng === defaultLocale ? "" : `/${lng}`}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
    </Head>
  );
}
