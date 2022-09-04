const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/connect');
const userRouter = require('./routes/user');
const PORT = process.env.PORT || 3080
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
});

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`);
})});

app.use(userRouter)