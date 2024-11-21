import axios from "axios";

export const api = axios.create({
  baseURL: "https://6f5d-2804-45c8-8242-ee00-5084-a2c2-20cb-61b4.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzMyMDUwMTczLCJleHAiOjE3MzIxMzY1NzN9.6EBT_wsXIKv-y_-oNypTw-AKjrvaBxDEEUpBx9lMGgs"
  }
})