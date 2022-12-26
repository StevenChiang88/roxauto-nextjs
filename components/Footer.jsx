import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillMail, AiFillPhone } from "react-icons/ai";
import GeneralButton from "./GeneralButton";
const Footer = () => {
  return (
    <div className="w-full ">
      <div className=" p-10 m-auto grid lg:grid-cols-2">
        <div className="lg:pr-[10rem]">
          <h1>ROX Auto Parts</h1>
          <h5 className="py-4">
            Rox Auto Parts has been engaged in the automotive parts business
            since 1976 and has proven itself to be one of the best in Taiwan
            automotive parts industry.
          </h5>
          <div className="flex gap-4 mb-4 items-center">
            <a target="blank" href="https://www.facebook.com/roxqualityparts/">
            <AiFillFacebook  className="hover:text-gray-400 ease-in duration-300" size="40" />
            </a>
            <a target="blank" href="mailto:rox@rox.com">
            <AiFillMail className="hover:text-gray-400 ease-in duration-300" size="40" />
            </a>

            <GeneralButton href="/Contact" color="blue" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 ">
          <div className="flex flex-col">
            <h3 className=" mb-4">Site</h3>
            <Link href="/">
            <h5 className="hover:text-[#3671E9] ease-in duration-300">Home</h5>
</Link>

<Link href="/Brands">

            <h5 className="hover:text-[#3671E9] ease-in duration-300">Brands</h5>
            </Link>

            <Link href="/Products">

            <h5 className="hover:text-[#3671E9] ease-in duration-300">Products</h5>
            </Link>

          </div>
          <div className="flex flex-col">
            <h3 className="mb-4">Info</h3>
            <h5>Contact Us</h5>
            <h5>Rox@rox.com</h5>
            <h5>Fax:(+02)123 4567</h5>
          </div>
        </div>
      </div>
      <div className="w-full text-center mb-4">
        <h4 className="text-sm">
          © ROX International Corporation All right reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
