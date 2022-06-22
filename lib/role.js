const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('../config/connection');
const firstPrompt = require('./start');


function viewAllRoles() {
    const firstPrompt = require('./start')
    let query = 'Select * FROM roles';
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
}

function addARole() {
    const firstPrompt = require('./start')
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

function deleteRole() {
    const firstPrompt = require('./start')
    let query = 'DELETE FROM roles WHERE id= ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the employee id',
        name: 'role'
    }
    ]).then(answer => {
        connection.query(query, answer.role, function (err, results) {
            if (err) throw err;
            console.table(answer);
            firstPrompt();

        })
    })
}

module.exports = {viewAllRoles, addARole, deleteRole};