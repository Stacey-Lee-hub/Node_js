const Product = require('../models/productModel');

exports.getAllProducts = (req,res) => {
    Product.getAllProducts((e,results) => {
        if(e) return res.status(500).json({error: 'Failed to retrieve products'});
        res.json(results);
    });
};

exports.getProductByProductCode = (req,res) => {
    Product.getProductByProductCode(req.params.product_code, (e,results) => {
        if(e) return res.status(500).json({error: 'Failed to retrieve product'});
        if(results.length === 0) return res.status(404).json({message: 'Product not found'});
        res.json(results[0]);
    });
};

exports.createProduct = (req,res) => {
    Product.createProduct(req.body, (e,results) => {
        if(e) return res.status(500).json({error: 'Failed to create product'});
        res.status(201).json({
            message: 'Product created successfully', 
            product_code: req.body.product_code,
            ...req.body
        });
    });
};

exports.updateProduct = (req,res) => {
    Product.updateProduct(req.params.product_code, req.body, (e) => {
        if(e) return res.status(500).json({error: 'Failed to update product'});
        res.json({message: 'Product updated successfully'});
    });
};

exports.deleteProduct = (req,res) => {
    Product.deleteProduct(req.params.product_code, (e) => {
        if(e) return res.status(500).json({error: 'Failed to delete product'});
        res.json({message: 'Product deleted successfully'});
    });
};