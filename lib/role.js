const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('../server')


function viewAllRoles() {
    let query = 'Select * FROM roles';
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
}

function addARole() {
    let query = 'INSERT INTO roles(title, salary, department_id) VALUES (?, ?, ?)'

    inquirer.prompt([{
        type: 'input',
        message: 'enter the name',
        name: 'roleName'
    },
    {
        type: 'input',
        message: 'enter the salary',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'enter the department',
        name: 'department'
    },
    ]).then(answer => {
        const { roleName, salary, department } = answer;
        connection.query(query, [roleName, salary, department], function (err, res) {
            if (err) throw err;
            console.table(res);
            firstPrompt();
        });
    });
}

module.exports = {viewAllRoles, addARole};