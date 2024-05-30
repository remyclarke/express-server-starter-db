-- db/seed.sql

INSERT INTO transactions (item_name, amount, date, "from", category) VALUES
('Income', 5000.00, '2024-05-01', 'Employer', 'Income'),
('Groceries', -150.25, '2024-05-03', 'Grocery Store', 'Food'),
('Rent', -1200.00, '2024-05-05', 'Landlord', 'Housing');
