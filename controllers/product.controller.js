const Product = require('../models/product.model');

exports.produtos = function (req, res) {

    Product.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Produto criado com sucesso!');
    })
};

exports.details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
}

exports.update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body },
        function (err, product) {
            if (err) return next(err);
            res.send('product update');
        });
}

exports.delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deletado com sucesso');
    })
}