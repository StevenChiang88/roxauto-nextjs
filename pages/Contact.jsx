import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GeneralBanner from "../components/GeneralBanner";
import { Button, Input, Textarea } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const Products = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
const form = useRef()
const sendEmail = async(e) => {
  e.preventDefault();
  try{  const res = await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
console.log(res.text)
    if (res.text === "OK"){alert("Send the message successfully!") }else{alert("Fail to send the mail")} 
  }
  catch(e){console.log(e)}
   
  // .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });

  e.target.reset()

};
  return (
    <div className="flex flex-col items-center">
      <GeneralBanner
        title={t("ContactPage.BannerTitle")}
        text={t("ContactPage.BannerText")}
      />

      <div className="w-full lg:w-4/5 bg-[#f1f2f4] dark:bg-[#121318] grid grid-cols-1 md:grid-cols-2 p-8">
        <div className="md:px-6">
          <h2>{t("ContactPage.ContactTitle")}</h2>
          <p>{t("ContactPage.ContactSubTitle")}</p>
          <p>{t("ContactPage.ContactText1")}</p>
          <p>{t("ContactPage.ContactText2")}</p>
          <p>{t("ContactPage.ContactText3")}</p>
        </div>
        <div>
          <form    id="ContactForm"       ref={form}           onSubmit={sendEmail}

 className="flex flex-col gap-4 w-full">
            <Input  required={true}          name="user_company"
 placeholder={t("ContactPage.ContactForm1")} />
            <Input required={true}  type="email"  name="user_email" placeholder={t("ContactPage.ContactForm2")} />
            <Input  required={true}  name="user_name" placeholder={t("ContactPage.ContactForm3")} />
            <Input required={true}  name="user_phone" placeholder={t("ContactPage.ContactForm4")} />
            <Textarea required={true}  name="message" rows="5" placeholder={t("ContactPage.ContactForm5")} />
            <Button type="submit"             form="ContactForm"
>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}



export default Products;
