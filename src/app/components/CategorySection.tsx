import { getCategory } from "../lib/category";
import CategoryCard from "./CategoryCard";

export default async function CategorySection() {
  const res = await getCategory();
  return (
    // <section className="mb-16">
    //   <h2 className="mb-6 text-3xl font-bold">Shop by Category</h2>

    //   <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
    //     {res.data.map((category) => (
    //       <CategoryCard key={category.id} />
    //     ))}
    //   </div>
    // </section>
    <></>
  );
}
