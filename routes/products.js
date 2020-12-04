const express = require('express');

const router = express.Router();

const Product = require('../models/productsSchema');

//Get
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products); 
    } catch (err) {
        res.json({ message: err });
    }
});

//Post
router.post('/', async (req, res) => {
    const prod = new Product({
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price
    });


    try {
        const postProduct = await prod.save();
        res.json(postProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete 
router.delete('/:id', async (req,res) => {
    try {
        const deleteProduct = await Product.remove({ _id: req.params.id });
        res.json(deleteProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update
router.patch('/:id', async (req,res) => {
    try {
        const updateProduct = await Product.updateOne(
            { _id: req.params.id },
            {$set: {
                name: req.body.name,
                description: req.body.description,
                stock: req.body.stock,
                price: req.body.price
            }});
        res.json(updateProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;