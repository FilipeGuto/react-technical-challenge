// Nesta pasta devem ser adicionadas as funções que farão a requisição ao backend
import { api } from "@/libs/axios/api";

interface Pagination {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export interface Category {
  id: number
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
}

export interface Color {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface Categories {
  data: Category[]
  meta: Pagination
}

export interface Colors {
  data: Color[]
  meta: Pagination
}

export const getCategories = async () => {
  const response = await api.get<Categories>('/categories');

  return response.data;
}

export const getColors = async () => {
  const response = await api.get<Colors>('/colors');

  console.log(response.data);

  return response.data;
}
