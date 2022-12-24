import Image from "next/image";
import React from "react";
import GeneralButton from "./GeneralButton";

const ContactCard = () => {
  return (
    <div className="w-full h-[700px] flex items-center justify-center" >
      <div className="relative w-4/5 h-4/5  flex items-center">
      <Image
        className="absolute w-full h-full object-cover"
        width="1000"
        height="1000"
        src="/../public/assets/contactpic.jpg"
        alt="rox auto parts"
      />

      <div className="absolute bg-black/70 w-full h-full text-white ">
        <div className="w-full md:w-[70%] h-full lg:w-1/2 p-10 flex flex-col justify-around">
          <h1 className="text-4xl">Let's Test asdasdada</h1>
          <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            inventore, nihil enim fugiat accusantium nobis. Sequi, quis esse
            nemo, incidunt doloribus, eligendi velit eum placeat laboriosam
            voluptates blanditiis quo.
          </p>
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
