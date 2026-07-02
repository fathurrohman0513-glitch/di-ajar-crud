export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoryResponse {
  success: boolean;
  data: Category[];
}
