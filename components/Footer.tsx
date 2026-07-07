import Link from "next/link";
import { useTranslation } from "next-i18next";
import { AiFillFacebook, AiFillMail } from "react-icons/ai";
import CtaButton from "./CtaButton";
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_FAX, CONTACT_TEL, FACEBOOK_URL } from "../lib/site";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-16 w-full border-t" style={{ borderColor: "var(--surface-border)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 p-10 lg:grid-cols-2">
        <div className="lg:pr-16">
          <h3>ROX AUTO PARTS</h3>
          <p className="text-muted py-4">
            Rox Auto Parts has been engaged in the automotive parts business since 1976 and has
            proven itself to be one of the best in the Taiwan automotive parts industry.
          </p>
          <div className="flex items-center gap-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Rox Auto Parts on Facebook">
              <AiFillFacebook className="hover:text-accent duration-200" size={36} />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email Rox Auto Parts">
              <AiFillMail className="hover:text-accent duration-200" size={36} />
            </a>
            <CtaButton href="/contact">{t("generalButton.Contact")}</CtaButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <nav className="flex flex-col gap-2">
            <h4 className="mb-2">Site</h4>
            <Link className="hover:text-accent duration-200" href="/">{t("navBar.Home")}</Link>
            <Link className="hover:text-accent duration-200" href="/brands">{t("navBar.Brands")}</Link>
            <Link className="hover:text-accent duration-200" href="/products">{t("navBar.Products")}</Link>
            <Link className="hover:text-accent duration-200" href="/contact">{t("navBar.Contact")}</Link>
          </nav>
          <div className="flex flex-col gap-2">
            <h4 className="mb-2">Info</h4>
            <span className="text-muted">Mail: {CONTACT_EMAIL}</span>
            <span className="text-muted">Tel: {CONTACT_TEL}</span>
            <span className="text-muted">Fax: {CONTACT_FAX}</span>
          </div>
        </div>
      </div>
      <p className="text-muted pb-6 text-center text-sm">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
