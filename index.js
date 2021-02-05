const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table")

const connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "#257976QXZIcjkg",
    database: "EmployeeDB"
});

connection.connect(function (err) {
    console.log("hello");
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "choice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee",
                "Exit"
            ]
        },
        ).then(answers => {
            switch (answers.choice) {
                case "View All Employees":
                    allEmployees();
                    break;
                case "View All Employees by Department":
                    byDepartment();
                    break;
                case "View All Employees by Manager":
                    byManager();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee":
                    updateEmployee();
                    break;
                // Exit
                case "Exit":
                    console.log("You're done!");
                    break;
            }
        })
};

function allEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res)
        runSearch();
    });
}


function addEmployee() {
    connection.query("Select * FROM role", function (err, res) {
        console.log(res);
        inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "What is your employee's first name?"
            },
            {
                type: 'input',
                name: 'lastName',
                message: "What is your employee's last name?"
            },
            {
                type: 'input',
                name: 'managersid',
                message: "What is your manager's id?"
            },
            {
                type: 'list',
                name: 'role',
                message: "What is your employee's role?",
                choices: res.map(item => ({ name: item.title, value: item.id }))
            }
        ]).then(answers => {
            console.log(answers);
            var employeeData = {
                manager_id: answers.managersid,
                role_id: answers.role, Last_Name: answers.lastName, First_Name: answers.firstName
            }
            connection.query("INSERT INTO employee set ?", employeeData, function (err, res) {
                if (err) throw err;
                console.table(res)
                runSearch();
            });
        });

    });
}
