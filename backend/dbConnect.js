const mongoose = require("mongoose");

const dbConnect = () => {
    const connectionParams = { useNewUrlParser: true }
    mongoose.connect(process.env.DB, connectionParams)
    mongoose.connection.on("connected", () => {
        console.log("connected to DB")
    })

    mongoose.connection.on("error", (err) => {
        console.log("error while connecting to DB", err)
    })

    mongoose.connection.on("disconnected", () => {
        console.log("disconnected to DB")
    })
}

module.exports = dbConnect