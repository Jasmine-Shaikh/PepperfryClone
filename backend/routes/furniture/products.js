const express = require("express")
const sofasDB = require("../../models/products")

const products = express.Router()

products.get('/sofas', async (req, res) => {
    let sofasDoc = await sofasDB.find()
    res.send(sofasDoc)
})



products.get('/sofas/:id', async (req, res) => {
    const id = +req.params.id;
    let sofasDoc = await sofasDB.findOne({ "id": id })
    res.send(sofasDoc)
})

// products.get('/', async (req, res) => {
//     let sofasDoc = await sofasDB.find()
//     res.send(sofasDoc)
// })
// products.get('/sofas/:id', async (req, res) => {
//     const id = +req.params.id;
//     let sofasDoc = await sofasDB.find({ "id": id })
//     res.send(sofasDoc)
// })
// products.get('/sofas', async (req, res) => {
//     let sofasDoc = await sofasDB.find()
//     res.send(sofasDoc)
// })
// products.get('/sofas/:id', async (req, res) => {
//     const id = +req.params.id;
//     let sofasDoc = await sofasDB.find({ "id": id })
//     res.send(sofasDoc)
// })
// products.get('/sofas', async (req, res) => {
//     let sofasDoc = await sofasDB.find()
//     res.send(sofasDoc)
// })
// products.get('/sofas/:id', async (req, res) => {
//     const id = +req.params.id;
//     let sofasDoc = await sofasDB.find({ "id": id })
//     res.send(sofasDoc)
// })


// products.get('/sofas', async (req, res) => {
//     let sofasDoc = await sofasDB.find()
//     res.send(sofasDoc)
// })
// products.get('/sofas/:id', async (req, res) => {
//     const id = +req.params.id;
//     let sofasDoc = await sofasDB.find({ "id": id })
//     res.send(sofasDoc)
// })


// products.get('/sofas', async (req, res) => {
//     let sofasDoc = await sofasDB.find()
//     res.send(sofasDoc)
// })
// products.get('/sofas/:id', async (req, res) => {
//     const id = +req.params.id;
//     let sofasDoc = await sofasDB.find({ "id": id })
//     res.send(sofasDoc)
// })




module.exports = products

