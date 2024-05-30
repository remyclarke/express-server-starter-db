-- db/schema.sql

DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  date DATE NOT NULL,
  "from" VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
);
