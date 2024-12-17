import axios from "axios";

export const api = axios.create({
  baseURL: "https://f88a-2804-1b1-b400-302d-8815-4586-a214-7ac0.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzM0NDUzMzQ0LCJleHAiOjE3MzQ1Mzk3NDR9.2FHbwFz8qYlIQv-j4-FIkwR_WjuYdGIKAew1kxMfxi4"
  }
})