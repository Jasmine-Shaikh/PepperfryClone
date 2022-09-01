
//initial commit
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const sofas = require("./routes/furniture/products");
const products = require("./routes/furniture/products");
const userRouter = require('./routes/user');
const dbConnect = require("./dbConnect");
const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors())
dbConnect()
app.use(userRouter)
app.use('/products', products)

app.listen(port, () => { console.log(`app running on http://localhost:${port}`); })

