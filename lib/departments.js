const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


function viewAllDepartments() {
    let query = 'SELECT * FROM department';
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
}

function addADepartment() {
    let query = 'INSERT INTO department(name) VALUES (?)'

    inquirer.prompt({
        type: 'input',
        message: 'Enter the name of the department',
        name: 'departmentName'
    }).then(answer => {
        connection.query(query, [answer.departmentName], function (err, res) {
            if (err) throw err;
            console.table(res);
            firstPrompt();
        });
    });
}

module.exports = {viewAllDepartments, addADepartment};