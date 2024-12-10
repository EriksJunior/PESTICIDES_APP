import { api } from "../config/axios";

export async function FindProblemsByCultureId(cultureId, pesticideId) {
  const { data } = await api.get(`/list/problemas/${cultureId}/${pesticideId}`)
  return data
}

export async function FindProblemsDetails(cultureId, pesticideId, problemId) {
  const { data } = await api.get(`/details/problemas/${cultureId}/${pesticideId}/${problemId}`)
  return data
} 