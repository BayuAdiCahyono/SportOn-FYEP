import Image from "next/image";

const DetailProduk = () => {
  // Data dummy sementara, biar halaman bisa tampil
  const product = {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    imgUrl: "product-1.png",
    description: "Produk olahraga berkualitas tinggi untuk mendukung aktivitas lari Anda."
  };

  return (
    <section className="container mx-auto mt-20 mb-32">
      <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <Image
          src={`/gambar/produk/${product.imgUrl}`}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain"
        />
        <div>
          <p className="text-gray-600 mb-2">Kategori: {product.category}</p>
          <p className="text-primary font-medium mb-4">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product.price)}
          </p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailProduk;