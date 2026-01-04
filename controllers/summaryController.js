const fs = require("fs/promises");
const path = require("path");
const { calculateSummary } = require("../utils/analytics");

const FILE_PATH = path.join(__dirname, "../data/transactions.json");


/**
 * GET /summary
 */
const getSummary = async (req, res, next) => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const transactions = data && data.trim().length
      ? JSON.parse(data)
      : [];

    const summary = calculateSummary(transactions);

    res.status(200).json(summary);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSummary,
};