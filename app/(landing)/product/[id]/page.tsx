import Image from "next/image";
import ProductActions from "../../components/produk-detail/produk-action";

const ProductDetail = () => {
  return (
    <main className="container max-auto py-20 px-20 flex gap-12">
      <div className="bg-primary-light aspect-square min-w-100 flex justify-center items-center">
        <img
          src="/gambar/produk/product-1.png"
          width={550}
          height={550}
          alt="Product Image"
          className="aspect-square object-contain w-full"
        />
      </div>
      <div className="w-full py-7">
        <h1 className="font-bold text-5xl mb-6">SportOn Hypersonic 6</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
            FootBall
        </div>
        <p className="leading-loose mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur iste voluptatibus necessitatibus aperiam laboriosam porro? Quia neque quaerat autem, veritatis deleniti saepe ab. Nesciunt sunt necessitatibus fugit laborum repellendus.
        </p>
        <div className="text-primary text-[32px] font-semibold mb-12">
            {Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumSignificantDigits: 3,}).format(350000)}
        </div>
        <ProductActions/>
      </div>
    </main>
  )
}

export default ProductDetail