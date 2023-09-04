// Import the mysql2 library to use in the code
const mysql = require('mysql2');

// Create a connection pool for the MySQL database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Function to view all departments
const viewAllDepartments = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM department');
    return rows;
};

// Function to view all roles
const viewAllRoles = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM role');
    return rows;
};

// Function to view all employees
const viewAllEmployees = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM employee');
    return rows;
};

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees
};