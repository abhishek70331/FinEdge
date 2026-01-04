const express = require("express");

const { getSummary } = require("../controllers/summaryController");

const router = express.Router();

// GET /summary → fetch transactions summary
router.get("/", getSummary);

module.exports = router;