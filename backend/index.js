//initial commit
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const dbConnect = require("./dbConnect");
// const userRouter = require("./routes/userRoutes");
const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

dbConnect()

// app.use(userRouter)

app.listen(port, () => { console.log(`app running on http://localhost:${port}`); })