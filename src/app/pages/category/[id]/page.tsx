import { getCategory } from "@/app/lib/category";
import { notFound } from "next/navigation";

export default async function CategoryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await getCategory();
  const { id } = await params;

  const category = res.data.find((item) => item.id === Number(id));

  if (!category) {
    notFound();
  }
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">{category.name}</h1>
      <h1 className="text-3xl font-bold">{category.description}</h1>
    </div>
  );
}
