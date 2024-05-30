const express = require("express");
const cors = require("cors");

const transactionsRouter = require("./routes/transactionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Budget App");
});

app.use("/transactions", transactionsRouter);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
