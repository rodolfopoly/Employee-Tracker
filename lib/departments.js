const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('../config/connection');



function viewAllDepartments() {
    const firstPrompt = require('./start')
    let query = 'SELECT * FROM department';
    connection.query(query, function (err, results) {
        if (err) throw err;
        console.table(results);
        firstPrompt();
    });
}

function addADepartment() {
    const firstPrompt = require('./start')
    let query = 'INSERT INTO department(name) VALUES (?)'

    inquirer.prompt({
        type: 'input',
        message: 'Enter the name of the department',
        name: 'departmentName'
    }).then(answer => {
        connection.query(query, [answer.departmentName], function (err, results) {
            if (err) throw err;
            console.table(results);
            firstPrompt();
        });
    });
}

function deleteDepartment() {
    const firstPrompt = require('./start')
    let query = 'DELETE FROM department WHERE id= ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the employee id',
        name: 'department'
    }
    ]).then(answer => {
        connection.query(query, answer.department, function (err, results) {
            if (err) throw err;
            console.table(answer);
            firstPrompt();

        })
    })
}

module.exports = {viewAllDepartments, addADepartment, deleteDepartment};