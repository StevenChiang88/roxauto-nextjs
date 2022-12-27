import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import GeneralButton from "./GeneralButton";

const ContactCard = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[700px] flex items-center justify-center ">
      <div className="relative w-4/5 h-4/5  flex items-center">
        <Image
          className="absolute w-full h-full object-cover  rounded-xl "
          width="1000"
          height="1000"
          src="/../public/assets/contactpic.jpg"
          alt="rox auto parts"
        />

        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <div className="w-full md:w-[70%] h-full lg:w-1/2 p-10 flex flex-col justify-around">
            <h1>{t("ContactBox.Title")}</h1>
            <p className="text-lg py-8">{t("ContactBox.Text")}</p>
            <div className="max-w-[300px]">
              <GeneralButton href="/Contact" color="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
