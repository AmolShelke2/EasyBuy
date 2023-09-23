import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SpecificProduct = ({ product }) => {
  return (
    <div className="specific-product">
      <div className="image-container">
        <Image
          src={product.image}
          alt="specific product"
          height={600}
          width={600}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="content-wrapper">
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>

        <div className="btn-container">
          <button className="product-button">Explore More</button>
          <Link href={"/"}>
            <button className="product-button">Back To Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
