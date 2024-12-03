import axios from "axios";

export const api = axios.create({
  baseURL: "https://841e-2804-53e0-931e-d400-11dc-d217-6f5c-f791.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzMzMTc0NjM5LCJleHAiOjE3MzMyNjEwMzl9.f31cq0_R5YOmST6nzfxdt-RH62cMFEiSF20T3zMm_T4"
  }
})