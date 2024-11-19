import { api } from "../config/axios";

export async function SearchPerticide(text = '', page = 1) {
  const { data: { data } } = await api.get(`/agrotoxicos?text=${text}&page=${page}`)
  return data
}