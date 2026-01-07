import Image from "next/image";
import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/kategori";
import ProductsSection from "./components/home/produk";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
