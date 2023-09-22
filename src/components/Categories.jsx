import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Categories = () => {
  return (
    <div className="category">
      <h2 className="subheading">Categories</h2>
      <div className="category-wrapper">
        <Link href={"/about/mans"}>
          <div className="category-card">
            <Image
              className="category-image"
              src={"/images/categori-2.png"}
              height={350}
              width={500}
              alt="category-1"
            />
            <h3 className="name">Men</h3>
          </div>
        </Link>

        <Link href={"/about/womens"}>
          <div className="category-card">
            <Image
              className="category-image"
              src={"/images/categori-1.png"}
              height={350}
              width={500}
              alt="category-1"
            />
            <h3 className="name">Women</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
