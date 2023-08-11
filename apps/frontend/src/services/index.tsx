import { api } from "@/libs/axios/api";

interface Product {
  category: {
    id: number
    name: string
    description: string | null
  }
  color: {
    id: number
    name: string
  }
  description: string
  id: number
  image: {
    id: number
    url: string
    previewUrl: string | null
  }
  name: string
  price: number
}

interface Pagination {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export interface Products {
  data: Product[]
  meta: Pagination
}

export const getProducts = async () => {
  const response = await api.get<Products>('/products');

  return response.data;
}
