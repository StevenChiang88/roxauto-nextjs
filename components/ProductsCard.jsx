import Image from "next/image";
import React from "react";

const ProductsCard = ({ parts, picname }) => {
  return (
    <div className="flex flex-col items-center my-4  relative">
      <div className="absolute w-[250px] h-[250px] hover:bg-white/10"></div>
      <Image
        className="rounded-md"
        alt="taiwan automotive"
        width="250"
        height="250"
        src={`/../public/assets/Products/${picname}.jpg`}
      />
      <h3 className="py-8">{parts}</h3>
    </div>
  );
};

export default ProductsCard;
