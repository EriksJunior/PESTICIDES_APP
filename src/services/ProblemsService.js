import { api } from "../config/axios";

export async function FindProblemsByCultureId(cultureId, pesticideId) {
  const { data } = await api.get(`/list/problemas/${cultureId}/${pesticideId}`)
  return data
}