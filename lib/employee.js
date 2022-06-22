const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('../server')


function viewAllEmployees() {
    let query = 'Select * FROM employees';
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
}

function addAEmployee() {
    let query = 'INSERT INTO employees(first_name, last_name , role_id, manager_id) VALUES (?, ?, ?, ?)';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the first name',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'enter the last name',
        name: 'lastName'
    },
    {
        type: 'input',
        message: 'enter the role id',
        name: 'role'
    },
    {
        type: 'input',
        message: 'enter the manager id',
        name: 'manager'
    },
    ]).then(answer => {
        const { firstName, lastName, role, manager } = answer;
        connection.query(query, [firstName, lastName, role, manager], function (err, res) {
            if (err) throw err;
            console.table(res);
            firstPrompt();
        });
    });
}

function updateAnEmployeeRole() {
    let query = 'UPDATE employees SET role_id=? WHERE first_name= ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the employee first name',
        name: 'name'
    },
    {
        type:'input',
        message:'enter the new role',
        name:'role'
    }
    ]).then(answer =>{
        const {name, role} = answer;
        connection.query(query, [role, name], function(err, res){
            if(err) throw err;
            console.table(answer);
            firstPrompt();
        })
    })
}

module.exports = {updateAnEmployeeRole, addAEmployee, viewAllEmployees};