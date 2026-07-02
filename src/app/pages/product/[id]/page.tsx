import { deleteProduct, getProduct } from "@/app/lib/product";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await getProduct();
  const { id } = await params;
  const product = res.data.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <h1 className="text-3xl font-bold">{product.price}</h1>
      <h1 className="text-3xl font-bold">{product.stock}</h1>
      <h1 className="text-3xl font-bold">{product.category}</h1>
      <Image
        src={product.image}
        alt={product.name}
        unoptimized
        width={500}
        height={500}
        className="mt-4 rounded-lg"
      />
    </div>
  );
}
