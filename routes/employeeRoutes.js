const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.getAllEmployees);
router.get('/:employee_id', employeeController.getEmployeeById);
router.post('/', employeeController.addEmployee);
router.put('/:employee_id', employeeController.updateEmployee);
router.delete('/:employee_id', employeeController.deleteEmployee);

module.exports = router;