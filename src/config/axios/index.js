import axios from "axios";

export const api = axios.create({
  baseURL: "https://d156-2804-45c8-8255-600-8c73-118c-f0ef-37c8.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzMyNjUyODAxLCJleHAiOjE3MzI3MzkyMDF9.db2R2JOpEhGCj21BmLOIbBnYrZUmkmPPAXIH0hib2Dw"
  }
})