const Cart = require("../models/cart");
const cartRouter = require("express").Router();


cartRouter.get("/cart/ping", async (req, res) => {
    console.log("working")
    return res.json({ msg: "working" })
});

//CREATE
cartRouter.post("/cart", async (req, res) => {
    console.log(req.body.cart)
    for (let i = 0; i < req.body.cart.length; i++) {
        let cart = req.body.cart[i]
        let cartItem = {
            productId: cart.id,
            name: cart.name,
            madeBy: cart.details.brand,
            img: cart.img[0],
            offer_price: cart.offer_price,
            actual_price: cart.actual_price
        }
        console.log(cartItem, "-----------------------cart item")
    
    
        const newCart = new Cart(cartItem);
        console.log(newCart, "--------------newcart")
        // try {
        //     const savedCart = await newCart.save();
        //     res.status(200).json(savedCart);
        // } catch (err) {
        //     res.status(500).json(err);
        // }
    }
    res.send("ok")
});

//UPDATE
cartRouter.put("/cart/:id", async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
cartRouter.delete("/cart/:id", async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER CART
cartRouter.get("/cart/find/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});
cartRouter.get("/cart/all", async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = cartRouter;