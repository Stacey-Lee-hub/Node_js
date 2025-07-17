const Employee = require('../models/employeeModel');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.getAllEmployees();
        res.json(employees);
    } catch (e) {
        res.status(500).json({error: 'Failed to retrieve employees'});
    }
}

exports.getEmployeeById = async (req, res) => {
    try {
        const employeeId = req.params.employee_id;
        const employee = await Employee.getEmployeeById(employeeId);
        if (!employee) {
            return res.status(404).json({message: 'Employee not found'});
        };
        res.json(employee);
    } catch (e) {
        res.status(500).json({error: 'Failed to retrieve employee'});
    }
}

exports.addEmployee = async (req,res) => {
    try {
        const newEmployeeData = req.body;
        await Employee.addEmployee(newEmployeeData);

        // fetching all employees after adding new one
        const allEmployees = await Employee.getAllEmployees();
        res.status(201).json({
            message: 'Employee added successfully',
            employees: allEmployees
        });
    } catch (e) {
        res.status(500).json({error: 'Failed to add employee'});
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.employee_id;
        const updatedEmployeeData = req.body;
        const result = await Employee.updateEmployee(employeeId, updatedEmployeeData);
        if (result.affectedRows === 0) {
            const existingEmployee = await Employee.getEmployeeById(employeeId);
            if (!existingEmployee) {
                return res.status(404).json({message: 'Employee not found'});
            }
            return res.status(200).json({message: 'No changes made'});
        }
        const updatedEmployee = await Employee.getEmployeeById(employeeId);

        res.json({
            message: 'Employee updated successfully',
            employee: updatedEmployee
        });
    } catch (e) {
        res.status(500).json({error: 'Failed to update employee'});
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.employee_id;
        const result = await Employee.deleteEmployee(employeeId);

        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Employee not found'});
        }

        const allEmployees = await Employee.getAllEmployees();
        res.json({
            message: 'Employee deleted successfully',
            employees: allEmployees
        });
    } catch (e) {
        res.status(500).json({error: 'Failed to delete employee'});
    }
}