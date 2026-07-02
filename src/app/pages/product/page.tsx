import CategorySection from "../category/page";
import { useWindowsSize } from "@/app/hooks/useWindowsSize";
import { deleteProduct, getProduct } from "@/app/lib/product";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/app/components/DeleteButton";

const API = process.env.NEXT_PUBLIC_API_URL;

export default async function ProductsPage() {
  // const { width, height } = useWindowsSize();
  const result = await getProduct();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-black">Product Page</h1>

        {/* <p>Width: {width}px</p>
        <p>Height: {height}px</p> */}
      </div>

      {/* Hero Section */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          {/* <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            ZSocks.id
          </span> */}

          <h1 className="mt-6 text-5xl font-bold text-slate-900">Zsocks.id</h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover premium socks designed for comfort, durability, and
            everyday performance.
          </p>
          <CategorySection />
        </div>
      </section>

      {/* Product List */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black">All Products</h2>

            <p className="text-slate-500">Explore our latest collection.</p>
          </div>

          <input
            type="text"
            placeholder="Search product..."
            className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-blue-500"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {result.data.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-black shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-black">
                  Premium
                </span>

                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                <h3 className="mt-4 text-xl font-semibold">{product.stock}</h3>
                <h3 className="mt-4 text-xl font-semibold">
                  {product.category_id}
                </h3>
                <h3 className="mt-4 text-xl font-semibold">
                  {product.category}
                </h3>
                <h3 className="mt-4 text-xl font-semibold">{product.image}</h3>

                <p className="mt-2 text-2xl font-bold text-yellow-600">
                  Rp {Number(product.price).toLocaleString("id-ID")}
                </p>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/pages/product/${product.id}`}
                    className="mt-5 block rounded-xl bg-yellow-600 px-4 py-3 text-center font-medium text-white transition hover:bg-yellow-400"
                  >
                    Detail
                  </Link>
                  <Link
                    href={`/pages/product/edit/${product.id}`}
                    className="mt-5 block rounded-xl bg-yellow-600 px-3 py-2  text-center font-medium text-white transition hover:bg-yellow-400"
                  >
                    Edit
                  </Link>

                  <DeleteButton id={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
