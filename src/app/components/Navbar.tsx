import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          Zsocks.id
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-black"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search product..."
            className="hidden rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 md:block text-black"
          />

          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            Cart
          </button>

          <Link
            href="/products/create"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Create Product
          </Link>
        </div>
      </div>
    </nav>
  );
}
