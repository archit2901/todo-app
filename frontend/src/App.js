import React, { useState, useEffect } from "react";
import { todoAPI } from "./services/api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await todoAPI.getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const response = await todoAPI.createTodo(newTodo);
      setTodos([response.data, ...todos]);
      setNewTodo({ title: "", description: "" });
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const response = await todoAPI.updateTodo(id, { completed: !completed });
      setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      {/* Add new todo form */}
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Todo title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Todo list */}
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <div className="todo-content">
                <h3>{todo.title}</h3>
                {todo.description && <p>{todo.description}</p>}
                <small>
                  Created: {new Date(todo.createdAt).toLocaleDateString()}
                </small>
              </div>
              <div className="todo-actions">
                <button
                  onClick={() => toggleComplete(todo._id, todo.completed)}
                  className="toggle-btn"
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
