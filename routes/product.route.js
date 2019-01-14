const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.produtos);
router.post('/create', product_controller.create);
router.get('/:id', product_controller.details);
router.put('/:id/update', product_controller.update);
router.delete('/:id/delete', product_controller.delete);

module.exports = router;