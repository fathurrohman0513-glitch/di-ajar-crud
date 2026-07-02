import axios from "axios";
import {
  CreateProductRequest,
  CreateProductResponse,
  EditProductRequest,
  ProductResponse,
} from "../tipe/products";

export const api = axios.create({
  baseURL: "http://192.168.1.91:3001",
});

export async function getProduct(): Promise<ProductResponse> {
  const res = await api.get("/products");

  const data = res.data;

  data.data = data.data.map((product: any) => ({
    ...product,
    image: product.image?.startsWith("http")
      ? product.image
      : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`,
  }));

  return data;
}

export async function getProductById(id: number) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function createProduct(
  payload: CreateProductRequest,
): Promise<CreateProductResponse> {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("price", payload.price.toString());
  formData.append("stock", payload.stock.toString());
  formData.append("category_id", payload.categoryId.toString());
  if (payload.image) {
    formData.append("image", payload.image);
  }
  const res = await api.post("/products", payload);

  return res.data;
}
export async function updateProduct(
  id: number,
  payload: EditProductRequest,
): Promise<CreateProductResponse> {
  const res = await api.put(`/products/${id}`, payload);

  return res.data;
}

export async function deleteProduct(id: number) {
  const res = await api.delete(`/products/${id}`);

  return res.data;
}
