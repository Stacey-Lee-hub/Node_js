const db = require('../config/db');

exports.getAllEmployees = async () => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM employees'
        );
        return rows;
    } catch (e) {
        console.error('Error fetching all employees: ', e);
        throw e;
    }
}

exports.getEmployeeById = async (employeeId) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM employees WHERE employee_id = ?', [employeeId]
        );
            return rows.length > 0 ? rows[0] : null;
    } catch (e) {
        console.error('Error fetching employee: ', e);
        throw e;
    }
}

exports.addEmployee = async (employeeData) => {
    const {first_name, last_name, email, phone_number, department, salary} = employeeData;
    try {
        const [result] = await db.query(
            'INSERT INTO employees (first_name, last_name, email, phone_number, department, salary) VALUES (?, ?, ?, ?, ?, ?)', [first_name, last_name, email, phone_number, department, salary]
        );
        return result;
    } catch (e) {
        console.error('Error adding employee: ', e);
        throw e;
    }
}

exports.updateEmployee = async (employeeId, employeeData) => {
    const {first_name, last_name, email, phone_number, department, salary} = employeeData;
    try {
        const [result] = await db.query(
            'UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone_number = ?, department = ?, salary = ? WHERE employee_id = ?', [first_name, last_name, email, phone_number, department, salary, employeeId]
        );
        return result;
    } catch (e) {
        console.error('Error updating employee: ', e);
        throw e;
    }
}

exports.deleteEmployee = async (employeeId) => {
    try {
        const [result] = await db.query(
            'DELETE FROM employees WHERE employee_id = ?', [employeeId]
        );
        return result;
    } catch (e) {
        console.error('Error deleting employee: ', e);
        throw e;
    }
}