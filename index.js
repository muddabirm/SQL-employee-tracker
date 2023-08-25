const mysql = require('mysql2');
const inquirer = require('inquirer');


const questions = [{


    type: 'list',
    name: 'start',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add an employee', 'update an employee']
}];
inquirer.prompt(questions);