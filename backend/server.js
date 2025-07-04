const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const todoRoutes = require("./routes/todos");

// Load environment variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware - Updated CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Todo API Server is running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
