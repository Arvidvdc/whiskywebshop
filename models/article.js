const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    name: String,
    price: Number,
    age: Number,
    distillery: String,
    pallet: String,
    country: String,
    region: String,
    description: String
});

module.exports = mongoose.model("Article", articleSchema);