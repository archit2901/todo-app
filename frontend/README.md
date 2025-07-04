# MERN Stack Todo App

A full-stack todo application built with MongoDB, Express.js, React, and Node.js. This project demonstrates complete CRUD operations, RESTful API design, and frontend-backend integration.

## 🚀 Features

- ✅ Create new todos
- 📝 View all todos
- ✏️ Update todo status (complete/incomplete)
- 🗑️ Delete todos
- 💾 Persistent data storage with MongoDB
- 🔄 Real-time UI updates
- 📱 Responsive design

## 🛠️ Tech Stack

**Frontend:**

- React.js
- Axios for HTTP requests
- CSS3 for styling

**Backend:**

- Node.js
- Express.js
- MongoDB with Mongoose ODM
- CORS for cross-origin requests
- dotenv for environment variables

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd todo-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/todoapp
PORT=3001
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Database Setup

**Option A: Local MongoDB**

- Install MongoDB Community Edition
- Start MongoDB service:

  ```bash
  # macOS
  brew services start mongodb-community

  # Windows
  net start MongoDB

  # Linux
  sudo systemctl start mongod
  ```

**Option B: MongoDB Atlas (Cloud)**

- Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a new cluster
- Get connection string and update `.env` file

## 🚀 Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

Server will run on `http://localhost:3001`

### Start Frontend Application

```bash
cd frontend
npm start
```

Application will open on `http://localhost:3000`

## 📚 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/todos`     | Get all todos   |
| GET    | `/api/todos/:id` | Get single todo |
| POST   | `/api/todos`     | Create new todo |
| PUT    | `/api/todos/:id` | Update todo     |
| DELETE | `/api/todos/:id` | Delete todo     |

### Example API Usage

**Create a new todo:**

```bash
curl -X POST http://localhost:3001/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn MERN Stack", "description": "Complete tutorial"}'
```

**Get all todos:**

```bash
curl http://localhost:3001/api/todos
```

## 🏗️ Project Structure

```
todo-app/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── Todo.js              # Todo schema
│   ├── routes/
│   │   └── todos.js             # Todo routes/controllers
│   ├── server.js                # Express server setup
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   │   └── api.js           # API service layer
│   │   ├── App.js               # Main React component
│   │   ├── App.css              # Styling
│   │   └── index.js             # React entry point
│   ├── public/
│   └── package.json             # Frontend dependencies
└── README.md
```

## 🔄 How It Works

### Data Flow

1. **User Interaction** → React components update state
2. **API Call** → Axios sends HTTP request to Express server
3. **Backend Processing** → Express routes handle business logic
4. **Database Operation** → Mongoose performs CRUD operations
5. **Response** → Data sent back to frontend
6. **UI Update** → React re-renders with new data

### Frontend-Backend Communication

- Frontend runs on port 3000
- Backend runs on port 3001
- CORS enabled for cross-origin requests
- RESTful API design for predictable endpoints

## 🎨 Key Features Explained

### State Management

```javascript
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);
```

### API Integration

```javascript
const fetchTodos = async () => {
  const response = await todoAPI.getTodos();
  setTodos(response.data);
};
```

### Database Schema

```javascript
const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
```

## 🐛 Troubleshooting

### Common Issues

**CORS Error:**

- Ensure backend CORS is configured for frontend origin
- Check if backend server is running on correct port

**MongoDB Connection Error:**

- Verify MongoDB is running locally
- Check connection string in `.env` file
- Ensure correct database permissions

**Port Already in Use:**

- Check if another application is using ports 3000 or 3001
- Change port in `.env` file if needed

**Module Not Found:**

- Run `npm install` in both frontend and backend directories
- Clear npm cache: `npm cache clean --force`

## 📦 Dependencies

### Backend Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.3",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3"
}
```

### Frontend Dependencies

```json
{
  "react": "^18.2.0",
  "axios": "^1.3.4"
}
```

## 🔮 Future Enhancements

- [ ] User authentication & authorization
- [ ] Todo categories and tags
- [ ] Due dates and reminders
- [ ] Search and filter functionality
- [ ] Dark mode theme
- [ ] Drag & drop reordering
- [ ] File attachments
- [ ] Real-time collaboration
- [ ] PWA (Progressive Web App) features
- [ ] Docker containerization
- [ ] CI/CD pipeline

## 🚢 Deployment

### Backend Deployment (Heroku)

```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-app-name
# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
# Deploy
git push heroku main
```

### Frontend Deployment (Netlify)

```bash
# Build the app
npm run build
# Deploy to Netlify
# Update API_URL in api.js to production backend URL
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- MongoDB documentation
- Express.js documentation
- React documentation
- MDN Web Docs
- Stack Overflow community

---

**⭐ If you found this project helpful, please give it a star!**
