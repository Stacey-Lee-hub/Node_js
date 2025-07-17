const db = require('../config/db');

// GET ALL | READ
exports.getAllUsers = (callback) => {
    db.query('SELECT * FROM users', callback);
};

// GET BY ID | READ
exports.getUserById = (id,callback) => {
    db.query('SELECT * FROM users WHERE id = ?',[id],callback);
};

// CREATE 
exports.createUser = (user, callback) => {
    const {email,first_name,last_name,password} = user;
    db.query('INSERT INTO users (email,first_name,last_name,password) VALUES (?,?,?,?)', [email,first_name,last_name,password], callback);
};

// UPDATE | PUT
exports.updateUser = (id, user, callback) => {
    const {email,first_name,last_name,password} = user;
    db.query('UPDATE users SET email = ?, first_name = ?, last_name = ?, password = ? WHERE id = ?',[email,first_name,last_name,password,id], callback);
};

// DELETE 
exports.deleteUser = (id,callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
}; 