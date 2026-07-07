import Image from "next/image";
import { useTranslation } from "next-i18next";
import CtaButton from "./CtaButton";

/** Full-width call-to-action band with photo background. */
export default function ContactCard() {
  const { t } = useTranslation();
  return (
    <section className="w-full max-w-7xl px-4 py-14">
      <div className="relative overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
        <Image
          className="h-[420px] w-full object-cover"
          width={1400}
          height={420}
          src="/static/images/contactpic.jpg"
          alt=""
          aria-hidden
        />
        <div
          className="absolute inset-0 flex items-center text-white"
          style={{ background: "var(--cta-band)", backdropFilter: "blur(2px)", border: "var(--cta-border)", borderRadius: "var(--radius)" }}
        >
          <div className="flex max-w-xl flex-col gap-6 p-10">
            <h2>{t("ContactBox.Title")}</h2>
            <p className="text-lg opacity-90">{t("ContactBox.Text")}</p>
            <div>
              <CtaButton href="/contact">{t("generalButton.Contact")}</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
