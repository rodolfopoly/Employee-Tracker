const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('../server');

const { updateAnEmployeeRole, addAEmployee, viewAllEmployees, updateAnEmployeeManager, viewEmployeesByManager, viewEmployeesByDepartment, deleteEmployee } = require("./employee");
const { viewAllRoles, addARole, deleteRole } = require("./role");
const { viewAllDepartments, addADepartment, deleteDepartment } = require("./departments");

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
            'update an employee role',
            'update an employee manager',
            'view employees by manager',
            'view employees by department',
            'delete employee',
            'delete role',
            'delete department'
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
            case 'update an employee manager':
                updateAnEmployeeManager();
                break;
            case 'view employees by manager':
                viewEmployeesByManager();
                break;
            case 'view employees by department':
                viewEmployeesByDepartment();
                break;
            case 'delete employee':
                deleteEmployee();
                break;
            case 'delete role':
                deleteRole();
                break;
            case 'delete department':
                deleteDepartment();
                break;
            default:
                break;
        }
    });
}

module.exports = firstPrompt;