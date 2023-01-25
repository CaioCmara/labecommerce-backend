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