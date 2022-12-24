import React from "react";
import { AiFillFacebook, AiFillMail, AiFillPhone } from "react-icons/ai";
import GeneralButton from "./GeneralButton";
const Footer = () => {
  return (
    <div className="w-full h-screen lg:h-auto ">
      <div className=" p-10 m-auto grid lg:grid-cols-2">
        <div className="lg:px-8">
          <h1>ROX Auto Parts</h1>
          <h3 className="my-4">
            Rox Auto Parts has been engaged in the automotive parts business
            since 1976 and has proven itself to be one of the best in Taiwan
            automotive parts industry.
          </h3>
          <div className="flex gap-4 mb-4 items-center">
            <AiFillFacebook size="40" />
            <AiFillMail size="40" />
            <GeneralButton href="/Contact" color="blue" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl mb-4">Site</h2>
            <h4>Home</h4>
            <h4>Brands</h4>
            <h4>Products</h4>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl mb-4">Information</h2>
            <h4>Contact Us</h4>
            <h4>Rox@rox.com</h4>
            <h4>Fax:(+02)123 4567</h4>
          </div>
        </div>
      </div>
      <div className="w-full text-center mb-4">
        <h4 className="text-sm">
          Copyright © 2023 ROX International Corporation All Right Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
