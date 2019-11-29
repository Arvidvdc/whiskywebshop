const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    amount: Number,
    articles: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        },
        name: String,
        amount: Number
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
    paid: { type: Boolean, default: false },
    orderedAt: Date
});

module.exports = mongoose.model("Order", orderSchema);