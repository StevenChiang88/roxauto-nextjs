import type { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Seo from "../components/Seo";
import GeneralBanner from "../components/GeneralBanner";
import ProductsCard from "../components/ProductsCard";
import Tabs, { type TabItem } from "../components/Tabs";
import ContactCard from "../components/ContactCard";
import type { PartCategory } from "../lib/types";

export default function Products() {
  const { t } = useTranslation();
  const categories = t("ProductsPage.PartsItem", { returnObjects: true }) as unknown as PartCategory[];

  const tabs: TabItem[] = categories.map((category) => ({
    label: category.name,
    content: (
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {category.Parts.map((part) => (
          <li key={part} className="border-b py-3 font-semibold" style={{ borderColor: "var(--surface-border)" }}>
            {part}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <div className="flex flex-col items-center">
      <Seo
        title="Products — Engine, Brake, Suspension & Body Parts | Rox Auto Parts"
        description={`${t("ProductsPage.BannerText")}`}
      />
      <GeneralBanner title={t("ProductsPage.BannerTitle")} text={t("ProductsPage.BannerText")} />
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <ProductsCard key={category.id} parts={category.name} picname={category.english} />
        ))}
      </div>
      <div className="w-full max-w-7xl px-4 pb-4">
        <Tabs tabs={tabs} ariaLabel="product part categories" />
      </div>
      <ContactCard />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? "en")) },
});
