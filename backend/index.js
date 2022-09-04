require("dotenv").config()
const express = require('express');
const cors = require('cors');
// const connectDatabase = require("./db");
const products = require("./routes/furniture/products");
const { connectDB } = require('./database/connect');
const userRouter = require('./routes/user');;
const cartRouter = require("./routes/cart");
const app = express()
const port = process.env.PORT || 8080
// connectDatabase()
connectDB()
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use('/products', products)

app.use(cartRouter)

// app.use(sellerRouter)

app.listen(port, () => { console.log(`app running on http://localhost:${port}`); })
