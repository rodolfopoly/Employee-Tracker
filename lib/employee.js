const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('../config/connection');


function viewAllEmployees() {
    const firstPrompt = require('./start')
    let query = 'Select * FROM employees';
    connection.query(query, function (err, results) {
        if (err) throw err;
        console.table(results);
        firstPrompt();
    });
}

function addAEmployee() {
    const firstPrompt = require('./start')
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
        connection.query(query, [firstName, lastName, role, manager], function (err, results) {
            if (err) throw err;
            console.table(results);
            firstPrompt();
        });
    });
}

function updateAnEmployeeRole() {
    const firstPrompt = require('./start')
    let query = 'UPDATE employees SET role_id=? WHERE first_name= ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the employee first name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'enter the new role id',
        name: 'role'
    }
    ]).then(answer => {
        const { name, role } = answer;
        connection.query(query, [role, name], function (err, results) {
            if (err) throw err;
            console.table(answer);
            firstPrompt();
        })
    })
}

function updateAnEmployeeManager() {
    const firstPrompt = require('./start')
    let query = 'UPDATE employees SET manager_id=? WHERE first_name= ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the employee first name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'enter the new manager id',
        name: 'manager'
    }
    ]).then(answer => {
        const { name, manager } = answer;
        connection.query(query, [manager, name], function (err, results) {
            if (err) throw err;
            console.table(answer);
            firstPrompt();
        })
    })
}
function viewEmployeesByManager() {
    const firstPrompt = require('./start')
    let query = 'Select * FROM employees WHERE manager_id= ? ';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the manager id',
        name: 'manager'
    }
    ]).then(answer => {
        connection.query(query, answer.manager, function (err, results) {
            if (err) throw err;
            console.table(results);
            firstPrompt();
        })
    })
}

function viewEmployeesByDepartment() {
    const firstPrompt = require('./start')
    let query = 'Select * FROM department LEFT JOIN roles ON department.id = roles.department_id LEFT JOIN employees ON roles.id = employees.id Where department.id = ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the department id',
        name: 'department'
    }
    ]).then(answer => {
        connection.query(query, answer.department, function (err, results) {
            if (err) throw err;
            console.table(results);
            firstPrompt();

        })
    })
}

function deleteEmployee() {
    const firstPrompt = require('./start')
    let query = 'DELETE FROM employees WHERE id= ?';

    inquirer.prompt([{
        type: 'input',
        message: 'enter the employee id',
        name: 'employee'
    }
    ]).then(answer => {
        connection.query(query, answer.employee, function (err, results) {
            if (err) throw err;
            console.table(answer);
            firstPrompt();

        })
    })
}

module.exports = { updateAnEmployeeRole, addAEmployee, viewAllEmployees, updateAnEmployeeManager, viewEmployeesByManager, viewEmployeesByDepartment, deleteEmployee };