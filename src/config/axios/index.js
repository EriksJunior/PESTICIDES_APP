import axios from "axios";

export const api = axios.create({
  baseURL: "https://8ee1-2804-53e0-9304-4e00-bd45-b2da-b422-a4ec.ngrok-free.app",
  headers: {
    header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMzcwNzgwMzMtOGE1Yi00ZjQzLTkyODQtMmNlMzA3NDg0MDdiIiwiaWF0IjoxNzM1ODU0MTQ5LCJleHAiOjE3MzU5NDA1NDl9.PWy_xHTKK0C0qwqQOk3G8OgamKZrTpEaQixhpOkvzJ0"
  }
})