export interface CreateProductRequest {
  name: string;
  category: string;
  categoryId: number;
  price: number;
  stock: number;
  image: File | null;
  description: string;
}

export interface CreateProductResponse {
  success: boolean;
  total: number;
  data: Product[];
}

export interface EditProductRequest {
  name: string;
  category: string;
  category_id: number;
  price: number;
  stock: number;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  category_id: number;
  price: string;
  stock: number;
  image: string;
}

export interface ProductResponse {
  success: boolean;
  total: number;
  data: Product[];
}
