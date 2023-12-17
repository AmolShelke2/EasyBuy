import { Banner } from "@/components/Home/Banner";
import { Categories } from "@/components/Home/Categories";
import { Header } from "@/components/Header";
import { Products } from "@/components/Home/Products";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Home/Footer";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [productsToShow, setProductsToShow] = useState(10);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setProducts(data);
    };

    getProducts();
  }, []);

  const handleShowMore = () => {
    setProductsToShow((prevProducts) => prevProducts + 10);
  };

  return (
    <main className="main-content">
      <Header />
      <Banner />
      <div className="sub-content">
        <Categories />
        <Products
          products={products}
          productsToShow={productsToShow}
          onShowMoreClick={handleShowMore}
        />
        <Footer />
      </div>
    </main>
  );
}
