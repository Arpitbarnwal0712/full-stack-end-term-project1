
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: "https://placehold.co/300x200?text=Product"
    },

    category: {
        type: String,
        default: "General"
    },

    stock: {
        type: Number,
        default: 10
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);
