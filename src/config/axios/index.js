import axios from "axios";

export const api = axios.create({
  baseURL: "https://2b44-2804-53e0-9306-de00-7cdc-a976-eebe-6fbf.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzMzMTc0NjM5LCJleHAiOjE3MzMyNjEwMzl9.f31cq0_R5YOmST6nzfxdt-RH62cMFEiSF20T3zMm_T4"
  }
})