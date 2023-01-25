-- Active: 1674668348502@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    email TEXT NOT NULL UNIQUE, 
    password TEXT NOT NULL
    );

 

INSERT INTO users(id, email, password)
VALUES ("Caio", "caio1801@gmail.com", "marleydog30");

INSERT INTO users(id, email, password)
VALUES ("Jessica", "JessicaBenzano@gmail.com", "thorfofo2012");

INSERT INTO users(id, email, password)
VALUES ("Elvis", "elvisC@hotmail.com", "caca301d");


-- criar tabela de produtos
CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    price INTEGER NOT NULL,
    category TEXT NOT NULL);

-- popular tabela com 5 produtos
INSERT INTO products(id, name, price, category)
VALUES ("c001", "Fiat Mobi", 70000, "Hatch");

INSERT INTO products(id, name, price, category)
VALUES ("c002", "Honda Civic 2023", 220000, "Sedan");

INSERT INTO products(id, name, price, category)
VALUES ("c003", "Hyundai HB20", 77790, "Hatch");

INSERT INTO products(id, name, price, category)
VALUES ("c004", " Toyota Corolla Cross", 159000, "SUV");

INSERT INTO products(id, name, price, category)
VALUES ("c005", "Peugeot 208 ", 85000, "Hatch");

SELECT * FROM users;
SELECT * FROM products;

SELECT * FROM products
WHERE name LIKE "Honda Civic 2023";

INSERT INTO users VALUES ("Nine", "lilika@gmail.com", "port304");

INSERT INTO products VALUES ("c003", "Renault Duster", 102290, "SUV");

SELECT * FROM products
WHERE id = "c002";

DELETE FROM users
WHERE id = "";

DELETE FROM products
WHERE id = "";

-- edit user pelo id 

UPDATE users
SET email = "rabicorte@gmail.com",
    password = "vastasrt"
WHERE id = "Nine";

-- Edit Product by id
UPDATE products
SET name = "Honda Civic Novo",
    price = 200000
WHERE id = "c002";

-- orderna resultados pela ordem crescente dos emails 

SELECT * FROM users
ORDER BY email ASC;

SELECT * FROM products
ORDER BY price ASC
LIMIT 90000;

SELECT * FROM products
WHERE price > 40000 AND price < 180000
ORDER BY price ASC;