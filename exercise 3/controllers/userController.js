const User = require('../models/userModel');

exports.getAllUsers = (req,res) => {
    User.getAllUsers((e,results) => {
        if(e) return res.status(500).json({error: 'Failed to retrieve users'});
        res.json(results);
    });
};

exports.getUserById = (req,res) => {
    User.getUserById(req.params.id, (e,results) => {
        if(e) return res.status(500).json({error: 'Failed to retrieve user'});
        if(results.length === 0) return res.status(404).json({message: 'User not found'});
        res.json(results[0]);
    });
};

exports.createUser = (req,res) => {
    User.createUser(req.body, (e,results) => {
        if(e) return res.status(500).json({error: 'Failed to create user'});
        res.status(201).json({
            message: 'User created successfully',
            id: results.insertId, 
            ...req.body
        });
    });
};

exports.updateUser = (req,res) => {
    User.updateUser(req.params.id, req.body, (e) => {
        if(e) return res.status(500).json({error: 'Failed to update user'});
        res.json({message: 'User updated successfully'});
    });
};

exports.deleteUser = (req,res) => {
    User.deleteUser(req.params.id, (e) => {
        if(e) return res.status(500).json({error: 'Failed to delete user'});
        res.json({message: 'User deleted successfully'});
    });
};