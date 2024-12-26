import axios from "axios";

export const api = axios.create({
  baseURL: "https://5257-2804-1b1-b400-302d-4952-bbb7-d6d0-cb48.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzM0NTU5Mjc3LCJleHAiOjE3MzQ2NDU2Nzd9._gcXI2oBzN5jOeEcmjNYWsDsPDZXcxNDBNhGel3g4BQ"
  }
})