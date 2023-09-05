const inquirer = require('inquirer');
const database = require('/db/database');

async function app() {
    let continueExecution = true;

    while (continueExecution) {
        const {action} = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'How can we help?',
            choices: [
                'Show All Departments',
                'Show All Roles',
                'Show All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Change an Employee Role',
                'Change an Employees Manager',
                'Remove a Department',
                'Remove a Role',
                'Remove an Employee',
                'Quit Application'
            ],
        });

        switch (action) {
            case 'Show All Departments':
                const departments = await database.viewDepartments();
                console.table(departments);
                break;
            case 'Show All Roles':
                const roles = await database.viewRoles();
                console.table(roles);
                break;
            case 'Show All Employees':
                const employees = await database.viewEmployees();
                console.table(employees);
                break;
            case 'Add a Department':
                const {name} = await inquirer.prompt(
                    {type: 'input', name: 'title', message: 'Enter the new Department name:'}
                );
                await database.additionalDepartment(name);
                break; 
            case 'Add a Role':
                const newRole = await inquirer.prompt([
                    {type: 'input', name: 'title', message: 'Enter the new Role name:'},
                    {type: 'input', name: 'salary', message: 'Enter the Salary for this new Role:'},
                ]);
                const department_id = await promptDepartmentChoice();
                await database.additionalRole(newRole.title, newRole.salary, department_id);
                break;              
            case 'Add an Employee':
                const newEmployee = await inquirer.prompt([
                    { type: 'input', name: 'first_name', message: 'Add the first name:' },
                    { type: 'input', name: 'last_name', message: 'Add the last name:' },
                ]);
                const employee_role_id = await promptRoleChoice();
                const manager_id = await promptEmployeeChoice('Select Manager for new Employee:');
                await database.additionalEmployee(newEmployee.first_name, newEmployee.last_name, employee_role_id, manager_id);
            case 'Change an Employee Role':
                const employee_to_update_id = await promptEmployeeChoice('Select an Employee:');
                const new_employee_role_id = await promptRoleChoice();
                await database.changeEmployeeRole(new_employee_role_id, employee_to_update_id);
                break;
            case 'Change an Employees Manager':
                const employee_to_update_manager_id = await promptEmployeeChoice('Select an employee:');
                const manager_to_update_id = await promptEmployeeChoice('Select a new Manager for this employee:');
                await database.changeEmployeeManager(employee_to_update_manager_id, manager_to_update_id);
                break;
            case 'Remove a Department':
                const department_to_delete_id = await promptDepartmentChoice();
                await database.removeDepartment(department_to_delete_id);
                break;
            case 'Remove a Role':
                const role_to_delete_id = await promptRoleChoice();
                await database.removeRole(role_to_delete_id);
                break;
            case 'Remove an Employee':
                const employee_to_delete_id = await promptEmployeeChoice('Select an employee to remove:');
                await database.removeEmployee(employee_to_delete_id);
                break;
        }
    }

    process.exit();

};