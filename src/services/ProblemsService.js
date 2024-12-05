import { api } from "../config/axios";

export async function FindProblemsByCultureId(cultureId) {
  const { data } = await api.get(`/list/problemas/${cultureId}`)
  return data
}