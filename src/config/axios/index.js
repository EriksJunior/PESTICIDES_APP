import axios from "axios";

export const api = axios.create({
  baseURL: "https://ae6f-2804-53e0-9301-dc00-b02e-4d83-1481-7c15.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzMzMTc0NjM5LCJleHAiOjE3MzMyNjEwMzl9.f31cq0_R5YOmST6nzfxdt-RH62cMFEiSF20T3zMm_T4"
  }
})