const express = require('express');
const cors = require('cors');
const { register, login, verifytoken } = require('../handlers/user');

const userRouter = express.Router();

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.post("/verifytoken",verifytoken);

module.exports = userRouter;