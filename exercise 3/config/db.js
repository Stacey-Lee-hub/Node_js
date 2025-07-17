const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'A$jP2703',
    database: "shopleft_database"
});

connection.connect(e => {
    if(e) throw e;
    console.log('Connected to MySQL Database');
});

module.exports = connection;