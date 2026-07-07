import { useRef, useState, type FormEvent } from "react";
import type { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import emailjs from "@emailjs/browser";
import Seo from "../components/Seo";
import GeneralBanner from "../components/GeneralBanner";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? ""
      );
      formRef.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Seo title="Contact Us | Rox Auto Parts" description={`${t("ContactPage.BannerText")}`} />
      <GeneralBanner title={t("ContactPage.BannerTitle")} text={t("ContactPage.BannerText")} />

      <div className="glass mx-4 my-14 grid w-full max-w-6xl grid-cols-1 gap-10 p-8 md:grid-cols-2 lg:p-16">
        <div>
          <h2>{t("ContactPage.ContactTitle")}</h2>
          <p className="text-muted mt-2 font-semibold">{t("ContactPage.ContactSubTitle")}</p>
          <p className="text-muted mt-6">{t("ContactPage.ContactText1")}</p>
          <p className="text-muted mt-4">{t("ContactPage.ContactText2")}</p>
          <p className="text-muted mt-2">{t("ContactPage.ContactText3")}</p>
        </div>

        <form ref={formRef} onSubmit={(e) => void sendEmail(e)} className="flex w-full flex-col gap-4">
          <input className="field" required name="user_company" placeholder={t("ContactPage.ContactForm1")} />
          <input className="field" required type="email" name="user_email" placeholder={t("ContactPage.ContactForm2")} />
          <input className="field" name="user_name" placeholder={t("ContactPage.ContactForm3")} />
          <input className="field" type="tel" name="user_phone" placeholder={t("ContactPage.ContactForm4")} />
          <textarea className="field" required name="message" rows={5} placeholder={t("ContactPage.ContactForm5")} />

          {status === "success" && (
            <p className="rounded border border-green-500 bg-green-500/10 px-4 py-2 text-green-600">
              Your message has been sent. We will get back to you soon!
            </p>
          )}
          {status === "error" && (
            <p className="rounded border border-red-500 bg-red-500/10 px-4 py-2 text-red-500">
              Something went wrong — please try again or email us directly.
            </p>
          )}

          <button className="btn btn-pop" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : t("ContactPage.ContactForm6")}
          </button>
        </form>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? "en")) },
});
