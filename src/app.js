const express = require("express");

const transactionRoutes = require("../routes/transactionRoutes");    
const userRouter = require("../routes/userRoutes")
const summaryRoutes = require("../routes/summaryRoutes");

const errorHandler = require("../middleware/errorHandler");
const logger = require("../middleware/logger");

const app = express();
require('dotenv').config()

app.use(express.json({ strict: false }));
app.use(logger);

app.get("/", (req,res) => {
    res.status(200).json({ status: "OK" });
})

// Routes
//app.use("/transactions", transactionRoutes);
const PORT = process.env.PORT;

// Transaction routes
app.use("/transactions", transactionRoutes);

// Register user routes
app.use("/users", userRouter)

// Summary routes
app.use("/summary", summaryRoutes);

// Error handling middleware
app.use(errorHandler);

// START SERVER HERE
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});