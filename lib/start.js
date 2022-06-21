const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


function firstPrompt() {
    inquirer.prompt({
        type: 'list',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
        ],
        message: 'choice one of the following option',
        name: 'start'
    }).then(answer => {
        console.log('you want to ' + answer.start);
        switch (answer.start) {
            case 'view all departments':
                viewAllDepartments();
                break;
            case 'view all roles':
                viewAllRoles();
                break;
            case 'view all employees':
                viewAllEmployees();
                break;
            case 'add a department':
                addADepartment();
                break;
            case 'add a role':
                addARole();
                break;
            case 'add an employee':
                addAEmployee();
                break;
            case 'update an employee role':
                updateAnEmployeeRole();
                break;
            default:
                break;
        }
    });
}

module.exports = firstPrompt;