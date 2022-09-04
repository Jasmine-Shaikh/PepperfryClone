require("dotenv").config()
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/connect');
const userRouter = require('./routes/user');
const connectDatabase = require("./db");
const cartRouter = require("./routes/cart");
const app = express()
const port = process.env.PORT || 8080
connectDatabase()
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use('/products', products)

app.use(cartRouter)

// app.use(sellerRouter)

app.listen(port, () => { console.log(`app running on http://localhost:${port}`); })
