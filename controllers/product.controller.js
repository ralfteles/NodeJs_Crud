const Product = require('../models/product.model');
const ProductRepository = require('../repositories/product.repository');

exports.produtos = function (req, res) {
    ProductRepository.getAll()
        .then((product) => {
            res.status(200).send(product);
        }).catch(err => res.status(500).send(err))

}

exports.create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    ProductRepository.create(product)
        .then(() => {
            res.status(200).send('Cadastrado com sucesso!');
        }).catch(err => res.status(500).send(err))
}

exports.details = function (req, res, next) {
    ProductRepository.getById(req.params.id)
        .then((product) => {
            res.status(200).send(product)
        }).catch(err => res.status(500).send(err))
}

exports.update = function (req, res, next) {
    // Product.findByIdAndUpdate(req.params.id, { $set: req.body },
    //     function (err, product) {
    //         if (err) return next(err);
    //         res.send('product update');
    //     });

    const p = req.body;
    ProductRepository.update(req.params.id, p)
        .then((p) => {
            res.status(201).send(p)
        }).catch(err => res.status(500).send(err))
}

exports.delete = function (req, res, next) {
    ProductRepository.remove(req.params.id)
        .then(() => {
            res.status(200).send("Removido com sucesso!")
        }).catch(err => res.status(500).send(err))
}