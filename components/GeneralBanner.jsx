import Image from "next/image";
import React from "react";

const GeneralBanner = ({ title, text }) => {
  return (
    <div className="relative w-full h-[22rem]">
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-black/60 text-white">
        <h2 className="font-bold text-4xl mb-8">{title}</h2>
        <h3>{text}</h3>
      </div>
      <Image
        className="w-full h-full object-cover"
        alt="taiwan auto parts"
        width="1000"
        height="400"
        src="/../public/assets/generalBannerPic.jpg"
      />
    </div>
  );
};

export default GeneralBanner;
