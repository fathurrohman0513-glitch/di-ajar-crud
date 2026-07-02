import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-slate-900">ZSocks</h2>

            <p className="mt-3 text-sm text-slate-600">
              Premium socks designed for comfort, style, and everyday
              performance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Navigation</h3>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-black">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Contact</h3>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>Email: info@zsocks.com</li>
              <li>Phone: +62 812 3456 7890</li>
              <li>Bandung, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ZSocks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
