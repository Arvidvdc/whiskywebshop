const Order = require("../models/order");

// ORDER
exports.order = (req, res) => {
    res.render("./order/order");
}

exports.order_post = (req, res) => {
    res.send("Putting adres into sessionStorage and redirecting to payment...");
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