"use client";

import { deleteProduct } from "@/app/lib/product";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this product?");

    if (!confirmDelete) return;

    await deleteProduct(id);

    alert("Product deleted");

    window.location.reload();
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-3 py-2 text-white"
    >
      Delete
    </button>
  );
}
