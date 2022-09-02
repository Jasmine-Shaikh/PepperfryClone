const mongoose = require('mongoose');

async function connectDatabase() {
    return new Promise((res, rej) => {
        const uri = 'mongodb+srv://Masai07:Masai123@pepperfryclone.xijuqig.mongodb.net/peppperfry'
        mongoose.connect(uri, (err) => {
            if (err) {
                console.error("Error connecting to DataBase", err);
                return rej(err)
            }
            console.log("Successfully connected to database")
            res();
        })
    })
}
module.exports = connectDatabase;