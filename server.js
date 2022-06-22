const cTable = require('console.table');
const mysql = require('mysql2');
const firstPrompt = require('./lib/start')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // {TODO: Add your MySQL password}
        password: 'rootmysql',
        database: 'employees_db'
    });

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected to the employees_db database.`);
    firstPrompt();
})

module.exports = connection;