const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    email: String,
    address: {
        company: String,
        firstname: String,
        lastname: String,
        zipcode: String,
        nr: String,
        phone: String,
        street: String,
        city: String 
    }
});

module.exports = mongoose.model("Order", orderSchema);