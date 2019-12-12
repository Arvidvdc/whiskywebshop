const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    amount: String,
    articles: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        },
        name: String,
        amount: String
    }],
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
    status: { type: String, default: "open"},
    orderedAt: Date
});

module.exports = mongoose.model("Order", orderSchema);