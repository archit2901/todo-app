const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/todoapp",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

// This module exports a function to connect to MongoDB using Mongoose.
// It uses the connection string from environment variables or defaults to a local MongoDB instance.
// The connection options ensure compatibility with the latest MongoDB driver.
// If the connection fails, it logs the error and exits the process.
// This is useful for initializing the database connection in the main application file.
// Usage: Call connectDB() in your main application file to establish the connection before starting the server.
// Example: const connectDB = require('./config/database'); connectDB();
// Note: Ensure that MONGODB_URI is set in your environment variables for production use.
// Make sure to install mongoose using npm install mongoose before using this module.
// This code is designed to be used in a Node.js application, typically in a file like
// app.js or server.js, where you set up your Express server and other configurations.
// It is a common practice to separate database connection logic into its own module for better organization and
// maintainability. This allows you to easily manage the database connection without cluttering your main application
// file with connection logic.
// Additionally, this approach allows for easier testing and debugging of the database connection process.
// The connection string can be customized based on the environment (development, production, etc.),
// making it flexible for different deployment scenarios.