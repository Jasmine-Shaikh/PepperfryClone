const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    password: {
        type: String,
        select: false
    },
    // address: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     }],
    // cart: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Products'
    // }
    },{
        timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = {User};
