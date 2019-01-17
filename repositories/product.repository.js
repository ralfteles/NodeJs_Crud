const Product = require('../models/product.model');

module.exports = new class ProductRepository {

    getAll() {
        return Product.find();
    }

    create(product) {
        return Product.create(product);
    }

    getById(id) {
        return Product.findById(id);
    }

    update(id, product) {
        return Product.findByIdAndUpdate(id, product, { new: true });
    }

    remove(id) {
        return Product.findByIdAndRemove(id);
    }
}