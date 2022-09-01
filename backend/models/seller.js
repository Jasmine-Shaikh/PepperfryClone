const mongoose = require('mongoose');

const address = new mongoose.Schema({
    pincode: { type: String },
    city: { type: String },
    state: { type: String }
})
const sellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    address: [address],
    category: { type: String, required: true }
})

module.exports = mongoose.model('Seller', sellerSchema) 