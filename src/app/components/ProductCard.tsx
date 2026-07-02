"use client";

import Image from "next/image";
import Link from "next/link";
import { deleteProduct } from "@/app/lib/product";
import { Product } from "../tipe/products";

//   const handleDelete = async (id: number) => {
//     const confirmDelete = confirm("Delete this product?");

//     if (!confirmDelete) return;

//     await deleteProduct(id);

//     window.location.reload();
//   };

//   return (
//     <div className="rounded-xl border p-4">
//       <img src={ProductCard.image} />

//       <h2>{ProductCard.name}</h2>

//       <button
//         onClick={() => handleDelete(ProductCard.id)}
//         className="bg-red-500 px-3 py-2 rounded text-white"
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

const API = process.env.NEXT_PUBLIC_API_URL;

const handleDelete = async (id: number) => {
  console.log("ID yang diKirim:", id);
  console.log("Type:", typeof id);
  const confirmDelete = confirm("Delete this product?");

  if (!confirmDelete) return;

  await deleteProduct(id);

  window.location.reload();
};

const handleDelete1 = async (e: React.FormEvent) => {
  e.preventDefault();

  const deleteId = parseInt(
    (e.target as HTMLAnchorElement).getAttribute("data-id") || "0",
  );

  if (deleteId === 0) {
    alert("Invalid ID");
    return;
  }

  await deleteProduct(deleteId);
  alert("Product deleted successfully");
  window.location.reload();
};
export default function ProductCard({
  id,
  name,
  price,
  image,
  stock,
  category,
  category_id,
}: Product) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-black shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={`${API}${image}`}
          alt={name}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-black">
          Premium
        </span>

        <h3 className="mt-4 text-xl font-semibold">{name}</h3>
        <h3 className="mt-4 text-xl font-semibold">{stock}</h3>
        <h3 className="mt-4 text-xl font-semibold">{category_id}</h3>
        <h3 className="mt-4 text-xl font-semibold">{category}</h3>
        <h3 className="mt-4 text-xl font-semibold">{image}</h3>

        <p className="mt-2 text-2xl font-bold text-yellow-600">
          Rp {Number(price).toLocaleString("id-ID")}
        </p>

        <div className="mt-5 flex gap-2">
          <Link
            href={`/pages/product/${id}`}
            className="mt-5 block rounded-xl bg-yellow-600 px-4 py-3 text-center font-medium text-white transition hover:bg-yellow-400"
          >
            Detail
          </Link>
          <Link
            href={`/pages/product/edit/${id}`}
            className="mt-5 block rounded-xl bg-yellow-600 px-3 py-2  text-center font-medium text-white transition hover:bg-yellow-400"
          >
            Edit
          </Link>

          <button
            onClick={handleDelete1}
            data-id={id}
            className="rounded bg-red-600 px-3 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
