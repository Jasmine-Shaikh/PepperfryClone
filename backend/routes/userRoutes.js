// const { Router } = require("express");
// const bcrypt = require("bcryptjs");
// const User = require("../models/user");
// const userRouter = Router()

// userRouter.get("/login", async (req, res) => {
    
// })

// userRouter.get("/register", async (req, res) => {
//     // console.log(req.body);
//     const { username, password: plainTextPassword } = req.body

//     if (!username || typeof username !== 'string') {
//         return res.json({ status: 'error', error: 'Invalid username' })
//     }
//     if (!plainTextPassword || typeof plainTextPassword !== 'string') {
//         return res.json({ status: 'error', error: 'Invalid password' })
//     }
//     if (plainTextPassword.length <= 8) {
//         return res.json({
//             status: 'error',
//             error: 'Password too small. Should be atleast 6 characters'
//         })
//     }

//     const password = bcrypt.hash(plainTextPassword, 4)

//     try {
//         const response = await User.create({
//             username,
//             password
//         })
//         res.json({ status: "OK" })
//     } catch (error) {
//         if (error.code === 11000) {
//             // duplicate key
//             return res.json({ status: 'error', error: 'Username already in use' })
//         }
//         throw error
//     }

//     res.send("register")
// })

// module.exports = userRouter