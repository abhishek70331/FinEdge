const Transaction = require("../models/transactionModel");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");


const DATA_PATH = path.join(__dirname, "../data/transactions.json");

const readTransactions = async () => {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(data);
}

const writeTransactions = async (data) => {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
};



/**
 * POST /transactions
 */
const addTransaction = async (req, res, next) => {
  try {
    const transactions = await readTransactions();

    const transaction = new Transaction({
      id: crypto.randomUUID(),
      ...req.body
    });

    transactions.push(transaction);
    await writeTransactions(transactions);

    res.status(201).json(transaction);
  } catch (err) {
    next(err);
  }
};


/**
 * GET /transactions
 */
const getTransactions = async (req, res, next) => {
  try {
    const transactions = await readTransactions();
    res.status(200).json(transactions);
  } catch (err) {
    next(err);
  }
};

/**
 * GET /transactions by id
 */
const getTransactionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const transactions = await readTransactions();

    const transaction = transactions.find(t => t.id === id)

    if(!transaction){
        return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (err) {
    next(err);
  }
};

/**
 * Upadate transaction by id
 */

const updateTransactionById = async (req, res, next) => {
  try{
    const { id } = req.params

    const transactions = await readTransactions();
    const index = transactions.findIndex(t => t.id === id)

    if(index === -1){
        return res.status(404).json({ message: "Transaction not found" });
    }

    transactions[index] = { ...transactions[index], ...req.body };
    await writeTransactions(transactions);

    res.status(200).json(transactions[index]);
    } catch(err){
    next(err);
  }
}

/**
 * Delete   transaction by id
 */
const deleteTransactionById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const transactions = await readTransactions()
        const filtered = await transactions.filter(t => t.id !== id)

        if(transactions.length === filtered.length){
            return res.status(404).json({ message: "Transaction not found" });
        }

        await writeTransactions(filtered);
        res.status(200).json({ message: "Transaction deleted successfully" });
    }catch(err){
        next(err);
    }
}

module.exports = {
    addTransaction,
    getTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById
};