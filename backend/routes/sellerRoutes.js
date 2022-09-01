const { Router } = require("express");
const bcrypt = require("bcryptjs");
const Seller = require("../models/seller");
const sellerRouter = Router()

sellerRouter.get("/login", async (req, res) => {

})

sellerRouter.get("/register", async (req, res) => {
    console.log(req.body);
    const { email, password: plainTextPassword,name,mobile,category,address } = req.body

    if (!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }
    if (plainTextPassword.length <= 8) {
        return res.json({
            status: 'error',
            error: 'Password too small. Should be atleast 8 characters'
        })
    }

    const password = await bcrypt.hash(plainTextPassword, 4)

    console.log((password));

    try {
        const response = await Seller.create({
            email,
            password: password,
            name,
            mobile,
            category,
            address
        })
        console.log(response);
       return res.json({ status: "OK" })
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        throw error
    }

    res.send("register")
})

module.exports = sellerRouter