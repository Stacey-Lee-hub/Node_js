CREATE DATABASE shopleft_database;
USE shopleft_database;

CREATE TABLE users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(225) NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    password VARCHAR(225) NOT NULL
);

CREATE TABLE products (
	product_code VARCHAR(40) PRIMARY KEY NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    product_price DECIMAL(5,2) NOT NULL,
    product_quantity INT NOT NULL
);

INSERT INTO users(email, first_name, last_name, password)
VALUES  ('matthew@lifechoices.co.za', 'Matthew', 'Brown', 'matthewbrown'),
		('stacey@lifechoices.co.za', 'Stacey-Lee', 'Pietersen', 'password123');

INSERT INTO products(product_code, product_name, product_price, product_quantity)
VALUES  ('baro1', 'Bar One', 9.99, 20),
		('hand1', 'Handy Andy', 19.00, 5),
		('pota1', 'Potatoes', 38.99, 10),
		('eggs1', 'Eggs', 24.99, 15),
		('sham1', 'Shampoo', 50.00, 5),
		('lips1', 'Lipstick', 99.99, 15);