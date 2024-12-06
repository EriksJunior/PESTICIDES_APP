import { api } from "../config/axios";

export async function FindProblemsByCultureId(pesticideId, cultureId) {
  const { data } = await api.get(`/list/problemas/${pesticideId}/${cultureId}`)
  return data
}