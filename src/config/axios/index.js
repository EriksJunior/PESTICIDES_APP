import axios from "axios";

export const api = axios.create({
  baseURL: "https://aff4-2804-53e0-93a4-3700-d54e-a40e-25b8-4c54.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzM0NTU5Mjc3LCJleHAiOjE3MzQ2NDU2Nzd9._gcXI2oBzN5jOeEcmjNYWsDsPDZXcxNDBNhGel3g4BQ"
  }
})