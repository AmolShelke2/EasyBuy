import Image from "next/image";
import React from "react";
import { SpecificProduct } from "./SpecificProduct";

export const Products = ({ products, productsToShow, onShowMoreClick }) => {
  return (
    <div className="products">
      <h2 className="subheading">Over Products</h2>
      {products ? (
        <div className="products-wrapper">
          {products.slice(0, productsToShow).map((product) => (
            <SpecificProduct key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="loader">
          <Image
            src={"/images/loader.gif"}
            height={50}
            width={50}
            alt="loader"
          />
        </div>
      )}
      {products && products.length > productsToShow && (
        <div className="button">
          <button onClick={onShowMoreClick} className="show-more">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
