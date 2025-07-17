const db = require('../config/db');

// GET ALL | READ
exports.getAllProducts = (callback) => {
    db.query('SELECT * FROM products', callback);
};

// GET BY ID | READ
exports.getProductByProductCode = (product_code,callback) => {
    db.query('SELECT * FROM products WHERE product_code = ?',[product_code],callback);
};

// CREATE 
exports.createProduct = (product, callback) => {
    const {product_code,product_name,product_price,product_quantity} = product;
    db.query('INSERT INTO products (product_code,product_name,product_price,product_quantity) VALUES (?,?,?,?)', [product_code,product_name,product_price,product_quantity], callback);
};

// UPDATE | PUT
exports.updateProduct = (product_code, product, callback) => {
    const {product_name,product_price,product_quantity} = product;
    db.query('UPDATE products SET product_name = ?, product_price = ?, product_quantity = ? WHERE product_code = ?',[product_name,product_price,product_quantity,product_code], callback);
};

// DELETE 
exports.deleteProduct = (product_code,callback) => {
    db.query('DELETE FROM products WHERE product_code = ?', [product_code], callback);
}; 