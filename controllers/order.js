const Order = require("../models/order");

// ORDER
exports.order = (req, res) => {
    res.render("./order/order");
}

// PAYMENT
exports.payment = (req, res) => {
    res.render("./order/payment");
}

exports.payment_post = (req, res) => {
    // create order db entry
        //include currentDate as orderedAt

    // redirect to payment provider
    res.send("order complete!");
}

// CONFIRMATION
exports.confirmation = (req, res) => {
    res.render("./order/confirmation");
}