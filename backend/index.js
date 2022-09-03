//initial commit
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const connectDatabase = require("./db");
const products = require("./routes/furniture/products");
const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

app.use('/products',products)


connectDatabase();
app.listen(port, ()=>{console.log(`app running on http://localhost:${port}`); })