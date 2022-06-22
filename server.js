const cTable = require('console.table');
const mysql = require('mysql2');
const firstPrompt = require('./lib/start')
const connection = require('./config/connection')

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected to the employees_db database.`);
    firstPrompt();
})