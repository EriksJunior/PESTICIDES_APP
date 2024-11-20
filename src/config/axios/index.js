import axios from "axios";

export const api = axios.create({
  baseURL: "https://b0a0-2804-45c8-8229-c400-e0db-79c-be1f-64df.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzMyMDUwMTczLCJleHAiOjE3MzIxMzY1NzN9.6EBT_wsXIKv-y_-oNypTw-AKjrvaBxDEEUpBx9lMGgs"
  }
})