"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import { getProductById, updateProduct } from "@/app/lib/product";

export default function EditProductPage() {
  const { id } = useParams();

  const router = useRouter();

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  const [stock, setStock] = useState("");

  const [category, setCategory] = useState("");

  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const res = await getProductById(Number(id));
      console.log(res);

      setName(res.data.name);
      setPrice(res.data.price);
      setImage(res.data.image);
      setStock(res.data.stock);
      setCategory(res.data.category);
      setCategoryId(String(res.category_id));
    }

    fetchProduct();
  }, [id]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateProduct(Number(id), {
      name,
      category,
      category_id: Number(categoryId),
      stock: Number(stock),
      price: Number(price),
      image,
    });

    alert("Success");
    router.push("/pages/product");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="string"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="string"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <input
        type="string"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />

      <button>Save</button>
    </form>
  );
}
