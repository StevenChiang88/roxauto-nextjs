import Image from "next/image";
import React from "react";
import GeneralButton from "./GeneralButton";

const ContactCard = () => {
  return (
    <div className="relative w-4/5 h-4/5 md:h-2/5 lg:h-3/5 flex items-center ">
      <Image
        className="absolute w-full h-full object-cover"
        width="1000"
        height="1000"
        src="/../public/assets/contactpic.jpg"
      />

      <div className="absolute bg-black/70 w-full h-full text-white">
        <div className="w-full lg:w-1/2 p-10">
          <h1 className="text-4xl">Let's Test asdasdada</h1>
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            inventore, nihil enim fugiat accusantium nobis. Sequi, quis esse
            nemo, incidunt doloribus, eligendi velit eum placeat laboriosam
            voluptates blanditiis quo.
          </p>
          <div className="max-w-[200px]">
            <GeneralButton href="/Contact" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
