import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/kategori";
import ProductsSection from "./components/home/produk";
import { getAllCategories } from "../service/kategori.service";
import { getAllProducts } from "../service/produk.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}