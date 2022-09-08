const { default: axios } = require("axios");

async function addToCartDB(cart) {
    axios.post('https://peppperfry.herokuapp.com/cart/', {
        cart
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// module.exports = {addToCartDB}