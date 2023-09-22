import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <Banner />
      <div className="sub-content">
        <Categories />
        <Products />
      </div>
    </main>
  );
}
