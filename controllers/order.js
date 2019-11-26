const   Order =     require("../models/order"),
        Article =   require("../models/article");

// ORDER
exports.order = (req, res) => {
    res.render("./order/order");
}

// PAYMENT
exports.payment = (req, res) => {
    res.render("./order/payment");
}

exports.payment_post = (req, res) => {
    // get count of orders
    Order.estimatedDocumentCount().then((count) => {
        newNr = count + 1;
        console.log(newNr);
    });
    // get currentDate for creation time
    let ts = Date.now();
    let creationTime = new Date(ts);
    console.log(creationTime);
    // get the total amount from the db

    // get the address
    // let address = req.body.address;
    // console.log(address);

    let testData = req.body.data;
    console.log(req.body);

    // create order db entry
    // redirect to payment provider
    return res.redirect(303, "/bestellen/bevestiging");
}

// CONFIRMATION
exports.confirmation = (req, res) => {
    res.render("./order/confirmation");
}