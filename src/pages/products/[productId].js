import { Header } from "@/components/Header";
import { SpecificProduct } from "@/components/Product/SpecificProduct";
import { useRouter } from "next/router";

const ProductPage = (product) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="sub-content">
        <SpecificProduct product={product} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const productId = params.productId;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await data.json();

  return {
    props: product,
  };
}

export default ProductPage;
