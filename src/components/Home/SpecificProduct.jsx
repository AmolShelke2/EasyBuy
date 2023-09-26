import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

export const SpecificProduct = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <Image
          height={400}
          width={400}
          alt="product-image"
          src={product.image}
          className="product-image"
          loading="lazy"
        />
        <h3 className="title">{product.title.substring(0, 20)}..</h3>
        <p className="price">${product.price}</p>
      </Link>

      <div className="icons">
        <AiOutlineHeart />
      </div>
    </div>
  );
};
