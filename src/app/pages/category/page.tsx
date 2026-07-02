import CategoryCard from "@/app/components/CategoryCard";
import { getCategory } from "@/app/lib/category";
import Link from "next/link";

export default async function CategorySection() {
  const response = await getCategory();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Shop by Category</h2>

        <p className="mt-2 text-slate-500">
          Find the perfect socks for every activity.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {response.data.map((category) => (
          // <CategoryCard key={category.id} />
          <div key={category.id}>{category.name}</div>
        ))}
      </div>

      {/* <CategoryCard /> */}

      <div>
        <Link
          href="./pages/category/create"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Create Product
        </Link>
      </div>
    </section>
  );
}
