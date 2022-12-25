import Image from "next/image";
import React from "react";

const ProductsCard = ({ parts }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <Image
        className="rounded-md "
        alt="taiwan automotive"
        width="200"
        height="200"
        src={`/../public/assets/Products/${parts}.jpg`}
      />
      <h3>{parts}</h3>
    </div>
  );
};

export default ProductsCard;
