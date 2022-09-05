const { default: axios } = require("axios");

async function addToCartDB(cart) {
    console.log(cart)
    axios.post('http://localhost:8080/cart/', {
        cart
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function getCartFromDB() {
 
    return axios.get('http://localhost:8080/cart/all')
        .then(function (response) {
        
            console.log(response.data);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}
module.exports = { addToCartDB, getCartFromDB }