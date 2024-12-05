import { api } from "../config/axios";

export async function FindCultureDetails(pesticideId) {
  const { data } = await api.get(`/agrotoxicos/culturas/receita/${pesticideId}`)
  return data
}