const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:product_code', productController.getProductByProductCode);
router.post('/', productController.createProduct);
router.put('/:product_code', productController.updateProduct);
router.delete('/:product_code', productController.deleteProduct);

module.exports = router;