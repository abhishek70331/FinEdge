const express = require("express");

const { addTransaction, getTransactions, getTransactionById, updateTransactionById, deleteTransactionById } = require("../controllers/transactionController");

const { validateTransaction } = require("../middleware/validator");

const router = express.Router()

// POST /transactions → add income/expense
router.post("/", validateTransaction, addTransaction)

// GET /transactions → fetch all income/expense
router.get("/", getTransactions)

// GET /transactions/:id → fetch transaction by id
router.get("/:id", getTransactionById)

// PUT /transactions/:id → update transaction by id
router.patch("/:id", updateTransactionById)

// DELETE /transactions/:id → delete transaction by id
router.delete("/:id", deleteTransactionById)

module.exports = router;