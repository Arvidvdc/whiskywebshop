const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products: [{}],
    address: {
        company: String,
        firstname: String,
        lastname: String,
        zipcode: String,
        nr: String,
        phone: String,
        street: String,
        city: String 
    },
    paid: { type: Boolean, default: false }
});

module.exports = mongoose.model("Order", orderSchema);