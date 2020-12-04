const express = require('express');

const router = express.Router();

const Sale = require('../models/salesSchema');

//Post
router.post('/', async (req, res) => {
    const sale = new Sale(req.body/*{
        direction: req.body.direction,
        totalPrice: req.body.totalPrice,
        products: req.body.productId
    }*/);

    try {
        const postSale = await sale.save();
        res.json(postSale);
    } catch (err) {
        res.json({ message: err });
    }
});

//Get
router.get('/', async (req, res) => {
    try {
        const sales = await Sale.find()
        .populate('products')
        res.json(sales);

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;