import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <Banner />
      <div className="sub-content">
        <Categories />
      </div>
    </main>
  );
}
