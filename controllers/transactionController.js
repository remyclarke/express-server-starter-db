const db = require("../db/dbconfig");

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await db.any("SELECT * FROM transactions");
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await db.one(
      "SELECT * FROM transactions WHERE id = $1",
      [id]
    );
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ error: "Transaction not found" });
  }
};

exports.createTransaction = async (req, res) => {
  const { item_name, amount, date, from, category } = req.body;
  try {
    const newTransaction = await db.one(
      'INSERT INTO transactions (item_name, amount, date, "from", category) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [item_name, amount, date, from, category]
    );
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { item_name, amount, date, from, category } = req.body;
  try {
    const updatedTransaction = await db.one(
      'UPDATE transactions SET item_name = $1, amount = $2, date = $3, "from" = $4, category = $5 WHERE id = $6 RETURNING *',
      [item_name, amount, date, from, category, id]
    );
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    await db.none("DELETE FROM transactions WHERE id = $1", [id]);
    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
