import { api } from "../config/axios";

export async function FindCultureDetails(pesticideId) {
  const { data } = await api.get(`/list/cultura/problemas/${pesticideId}`)
  return data
}