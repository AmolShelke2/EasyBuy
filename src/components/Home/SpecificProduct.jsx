import Image from "next/image";
import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

export const SpecificProduct = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="product-card">
        <Image
          height={400}
          width={400}
          alt="product-image"
          src={product.image}
          className="product-image"
        />
        <h3 className="title">{product.title.substring(0, 20)}..</h3>
        <p className="price">${product.price}</p>

        <div className="icons">
          <AiOutlineHeart />
        </div>
      </div>
    </Link>
  );
};
