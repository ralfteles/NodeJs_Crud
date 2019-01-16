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

    update(id, p) {

        const updatedproduct = {
            name: product.name,
            price: product.price,
        }


        return Product.findByIdAndUpdate((id, p, { new: true }));
    }

    delete(id) {
        return Product.findByIdAndRemove(id);
    }
}