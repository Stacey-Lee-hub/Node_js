const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let employees = [
    {id: 1, name: "Stacey-Lee Pietersen"}
];
let managers = [
    {id:51, name: "Jordan Davids"}
];

// GET all
app.get('/employees', (req, res) => {
    res.json(employees);
});

app.get('/managers', (req, res) => {
    res.json(managers);
});

// GET one
app.get('/employees/:id', (req, res) => {
    const employee = employees.find(e => e.id == req.params.id);
    res.json(employee || {error: 'Not Found'});
});

app.get('/managers/:id', (req, res) => {
    const manager = managers.find(m => m.id == req.params.id);
    res.json(manager || {error: 'Not Found'});
});

// POST
app.post('/employees', (req, res) => {
    const newEmployee = {id: Date.now(), ...req.body};
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

app.post('/managers', (req, res) => {
    const newManager = {id: Date.now(), ...req.body};
    managers.push(newManager);
    res.status(201).json(newManager);
});

// PATCH
app.patch('/employees/:id', (req,res) => {
    const index = employees.findIndex(e => e.id == req.params.id);
    if (index === -1 ) return res.status(404).send('Not Found');
    employees[index] = { ...employees[index], ...req.body };
    res.json(employees[index]);
});

app.patch('/managers/:id', (req,res) => {
    const index = managers.findIndex(m => m.id == req.params.id);
    if (index === -1 ) return res.status(404).send('Not Found');
    managers[index] = { ...managers[index], ...req.body };
    res.json(managers[index]);
});

// DELETE
app.delete('/employees/:id', (req,res) => {
    employees = employees.filter(e => e.id != req.params.id);
    res.sendStatus(204);
});

app.delete('/managers/:id', (req,res) => {
    managers = managers.filter(m => m.id != req.params.id);
    res.sendStatus(204);
});

app.listen(PORT, () => console.log(`PICK ’n STEAL server is running on http://localhost:${PORT}`));