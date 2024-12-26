import axios from "axios";

export const api = axios.create({
  baseURL: "https://8c2f-2804-53e0-9303-b300-456d-6d26-9167-6072.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzM0NTU5Mjc3LCJleHAiOjE3MzQ2NDU2Nzd9._gcXI2oBzN5jOeEcmjNYWsDsPDZXcxNDBNhGel3g4BQ"
  }
})