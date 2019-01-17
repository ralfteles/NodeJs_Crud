const Product = require('../models/product.model');
const ProductRepository = require('../repositories/product.repository');

exports.produtos = (req, res) => {
    ProductRepository.getAll()
        .then((product) => {
            res.status(200).send(product);
        }).catch(err => res.status(500).send(err))
}

exports.create = (req, res, next) => {
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

exports.details = (req, res, next) => {
    ProductRepository.getById(req.params.id)
        .then((product) => {
            res.status(200).send(product)
        }).catch(err => res.status(500).send(err))
}

exports.update = (req, res, next) => {
    ProductRepository.update(req.params.id, req.body)
        .then(() => {
            res.status(201).send("Atualizado com sucesso!")
        }).catch(err => res.status(500).send(err))
}

exports.delete = (req, res, next) => {
    ProductRepository.remove(req.params.id)
        .then(() => {
            res.status(200).send("Removido com sucesso!")
        }).catch(err => res.status(500).send(err))
}