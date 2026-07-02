"use client";

import { useState } from "react";
import { createProduct } from "@/app/lib/product";

export default function CreateProductPage() {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("File harus berupa gambar.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setImageError("Ukuran gambar maksimal 2MB.");
      return;
    }

    setImageError("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    categoryId: "",
    price: "",
    stock: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await createProduct({
        name: formData.name,
        category: formData.category,
        categoryId: Number(formData.categoryId),
        price: Number(formData.price),
        stock: Number(formData.stock),
        image: imageFile,
        description: formData.description,
      });

      console.log(result);

      alert("Product berhasil dibuat");
    } catch (error) {
      console.error(error);
      alert("Gagal membuat product");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 bg-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Product</h1>

        <p className="mt-2 text-slate-500 text-white">
          Add a new product to ZSocks catalogue.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"
      >
        {/* Product Name */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="ZSocks Sport Black"
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block font-medium text-black">Category</label>

          <select
            onChange={handleChange}
            name="category"
            value={formData.category}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black text-black"
          >
            <option value="1">Sport</option>
            <option value="2">Running</option>
            <option value="3">Casual</option>
            <option value="4">Crew Socks</option>
            <option value="5">Ankle Socks</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block font-medium text-black">Price</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="45000"
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="mb-2 block font-medium text-black">Stock</label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            placeholder="0"
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="mb-2 block font-medium text-black">Image URL</label>

          <input
            type="file"
            name="imageUrl"
            value={formData.imageUrl}
            placeholder="/images/socks.jpg"
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {/* Description */}
        <div>
          <label className="mb-2 block font-medium text-black">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Write product description..."
            name="Description"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-slate-800"
        >
          Create Product
        </button>
      </form>
    </main>
  );
}
