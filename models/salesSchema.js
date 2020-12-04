const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    direction: String,
    totalPrice: Number,
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Products' 
    }]
});

module.exports = mongoose.model('Sales', saleSchema);