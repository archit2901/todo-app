import axios from "axios";

const API_URL = "http://localhost:3001/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoAPI = {
  // Get all todos
  getTodos: () => api.get("/todos"),

  // Get single todo
  getTodo: (id) => api.get(`/todos/${id}`),

  // Create new todo
  createTodo: (todo) => api.post("/todos", todo),

  // Update todo
  updateTodo: (id, todo) => api.put(`/todos/${id}`, todo),

  // Delete todo
  deleteTodo: (id) => api.delete(`/todos/${id}`),
};

export default api;
