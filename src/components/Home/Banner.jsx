import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Banner = () => {
  const [currentImg, setCurrentImg] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (currentImg === 3) {
        setCurrentImg(1);
      } else {
        setCurrentImg(currentImg + 1);
      }
    }, 3000);
  }, [currentImg]);

  return (
    <section className="banner-section">
      <div className="image-container">
        <Image
          height={200}
          width={1600}
          src={`/images/banner-${currentImg}.png`}
          alt="banner"
          className="banner-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};
