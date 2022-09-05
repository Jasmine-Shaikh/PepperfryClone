const mongoose = require('mongoose');
require('dotenv').config()

async function connectDB() {
    let url = "mongodb+srv://Masai07:Masai123@pepperfryclone.xijuqig.mongodb.net/peppperfry"
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {connectDB};