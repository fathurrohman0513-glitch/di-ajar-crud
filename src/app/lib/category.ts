import axios from "axios";
import { CategoryResponse } from "../tipe/category";
import { CreateProductRequest, CreateProductResponse } from "../tipe/products";

export const api = axios.create({
  baseURL: "http://192.168.1.91:3001",
});

export async function getCategory(): Promise<CategoryResponse> {
  const res = await api.get("/categories");
  return res.data;
}

export async function createProduct(
  payload: CreateProductRequest,
): Promise<CreateProductResponse> {
  const res = await api.post("/products", payload);
  return res.data;
}
