const Order = require("../models/order");

// ORDER
exports.order = (req, res) => {
    res.render("./order/order");
}

exports.order_post = (req, res) => {
    res.send("making db entry and redirecting...");
}

// PAYMENT
exports.payment = (req, res) => {
    res.render("./order/payment");
}

exports.payment_update = (req, res) => {
    res.send("order complete!");
}

// payment get & put