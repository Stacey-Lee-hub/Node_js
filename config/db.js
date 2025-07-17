const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'A$jP2703',
    database: 'pick_n_steal',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;