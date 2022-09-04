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
const cabinetriesDB = mongoose.model('cabinetry', productSchema)
const chairsDB = mongoose.model('chair', productSchema)
const diningNBarsDB = mongoose.model('diningNbar', productSchema)
const bedsDB = mongoose.model('bed', productSchema)
const setteesDB = mongoose.model('settlee', productSchema)
const furnituresDB = mongoose.model('furniture', productSchema)
const tablesDB = mongoose.model('table', productSchema)




module.exports = {sofasDB,cabinetriesDB,tablesDB,furnituresDB,
                  setteesDB,bedsDB,diningNBarsDB,chairsDB}