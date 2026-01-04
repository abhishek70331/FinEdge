📊 FinEdge – Personal Finance & Expense Tracker API
📌 Overview

FinEdge is a RESTful backend API for managing personal finance data, including users, income, expenses, and financial summaries.
The project is built using Node.js and Express, focusing on clean architecture, asynchronous programming, and REST best practices.

This project demonstrates backend fundamentals such as modular design, middleware usage, validation, logging, error handling, and analytics computation using JSON-based persistence.


🎯 Key Features

User registration
Transaction management (income & expense)
Full CRUD operations for transactions
Financial summary (income, expense, balance)
Input validation middleware
Global error handling
Request logging middleware
Asynchronous file-based data persistence
Clean MVC-style project structure


🛠️ Tech Stack

Node.js
Express.js
JavaScript (ES6+)
fs/promises for async file handling
Nodemon (development)

📂 Project Structure

src/
├── app.js
├── routes/
│   ├── userRoutes.js
│   ├── transactionRoutes.js
│   └── summaryRoutes.js
├── controllers/
│   ├── userController.js
│   ├── transactionController.js
│   └── summaryController.js
├── models/
│   ├── userModel.js
│   └── transactionModel.js
├── middleware/
│   ├── logger.js
│   ├── validator.js
│   └── errorHandler.js
├── utils/
│   └── analytics.js
└── data/
    ├── users.json
    └── transactions.jsonsrc/


🚀 Getting Started

1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd FinEdge_proj

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm run dev

Server will start on:
http://localhost:3000


📌 API Endpoints

👤 User APIs

Method	Endpoint	Description
POST	/users	Register a new user


💳 Transaction APIs

Method	Endpoint	Description
POST	/transactions	Add income/expense
GET	/transactions	Get all transactions
GET	/transactions/:id	Get transaction by ID
PATCH	/transactions/:id	Update transaction
DELETE	/transactions/:id	Delete transaction

📈 Summary API

Method	Endpoint	Description
GET	/summary	Get income, expense & balance

**Example Response:**

{
  "totalIncome": 50000,
  "totalExpense": 12000,
  "balance": 38000
}


🧠 Middleware Used

🔹 Validation Middleware
Validates transaction inputs
Prevents invalid data persistence

🔹 Logging Middleware
Logs request method, URL, status code, and response time

🔹 Global Error Handler
Centralized error handling
Handles malformed JSON and runtime errors


⚙️ Data Persistence

Uses JSON files stored in /data
All file operations handled asynchronously using fs/promises
Defensive parsing implemented to prevent crashes due to malformed data


🧪 Testing

APIs were tested using Postman during development.
(All CRUD operations and edge cases verified.)


🧩 Design Decisions

Followed MVC-style architecture for clarity and maintainability
Kept controllers thin and reusable
Used middleware for cross-cutting concerns (logging, validation, errors)
Chose JSON-based persistence for simplicity and learning focus

📚 Learning Outcomes

Gained hands-on experience with Express middleware
Improved understanding of Node.js async behavior
Practiced REST API design and error handling
Learned how to structure a backend project professionally

Note: Final note
Final submission for Airtribe backend evaluation.