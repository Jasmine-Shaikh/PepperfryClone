const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        "id": Number,
        "name": String,
        "img": [String],
        "madeBy": String,
        "offer_price": String,
        "actual_price": String,
        "total_savings": String,
        "price": String,
        "seater": Number,
        "details": {
            "brand": String,
            "dimensions": String,
            "weight": String,
            "warranty": String,
            "assembly": String,
            "primary material": String,
            "room type": String,
            "seating height": Number,
            "overview": String
        }
})

const sofasDB = mongoose.model('sofa', productSchema)

module.exports = { sofasDB }