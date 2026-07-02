"use client";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  "All",
  "Sport",
  "Running",
  "Casual",
  "Crew",
  "Ankle",
  "Compression",
];

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition
            ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white border text-slate-700 hover:bg-slate-100"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
