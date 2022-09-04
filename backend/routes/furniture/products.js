const express = require("express")
const { sofasDB, cabinetriesDB, tablesDB, furnituresDB,
    setteesDB, bedsDB, diningNBarsDB, chairsDB} = require("../../models/products")

const products = express.Router()

products.get('/sofas', async (req, res) => {
    let Doc = await sofasDB.find()
    res.send(Doc)
})

products.get('/sofas/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await sofasDB.findOne({ "id": id })
    res.send(Doc)
})

products.get('/tables', async (req, res) => {
    let Doc = await tablesDB.find()
    res.send(Doc)
})
products.get('/tables/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await tablesDB.find({ "id": id })
    res.send(Doc)
})
products.get('/settees', async (req, res) => {
    let Doc = await setteesDB.find()
    res.send(Doc)
})
products.get('/settees/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await setteesDB.find({ "id": id })
    res.send(Doc)
})
products.get('/beds', async (req, res) => {
    let Doc = await bedsDB.find()
    res.send(Doc)
})
products.get('/beds/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await bedsDB.find({ "id": id })
    res.send(Doc)
})


products.get('/chairs', async (req, res) => {
    let Doc = await chairsDB.find()
    res.send(Doc)
})
products.get('/chairs/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await chairsDB.find({ "id": id })
    res.send(Doc)
})


products.get('/diningNbars', async (req, res) => {
    let Doc = await diningNBarsDB.find()
    res.send(Doc)
})
products.get('/diningNbars/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await diningNBarsDB.find({ "id": id })
    res.send(Doc)
})

products.get('/cabinetries', async (req, res) => {
    let Doc = await cabinetriesDB.find()
    res.send(Doc)
})
products.get('/cabinet/:id', async (req, res) => {
    const id = +req.params.id;
    let Doc = await cabinetriesDB.find({ "id": id })
    res.send(Doc)
})




module.exports = products

