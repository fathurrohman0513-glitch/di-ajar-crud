import Category from "./pages/category/page";
import Product from "./pages/product/page";

export default function Home() {
  return (
    <div className="min-h-100 bg-yellow-500">
      <Product />
      {/* <Category /> */}
    </div>
  );
}
