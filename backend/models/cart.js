const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String,
                },
                name: {
                    type: String,
                },
                madeBy: {
                    type: String,
                },
                img: {
                    type: String,
                },
                offer_price: {
                    type: String,
                },
                actul_price: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
