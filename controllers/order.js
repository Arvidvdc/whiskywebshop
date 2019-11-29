const Order = require("../models/order"),
    Article = require("../models/article");

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

    // get currentDate for creation time
    let ts = Date.now();
    let creationTime = new Date(ts);

    // assign body.data to data
    const data = req.body;
    console.log(data);

    //get the total amount from the database
    var totalAmount = 0;
    // DOESN"T WORK YET
    // async function addToAmount() {
    //     return new Promise((resolve, reject) => {
    //         data[1].products.forEach((item) => {
    //             let id = item.id;
    //             let amount = item.amount;
    //             // console.log(item);
    //             Article.findById(id, (err, foundItem) => {
    //                 if (err) {
    //                     console.log(err);
    //                 } else {
    //                     let price = foundItem.price * amount;
    //                     totalAmount = totalAmount + price;
    //                     resolve(totalAmount);
    //                 }
    //             });
    //         });
    //     });
    // }
    // addToAmount().then(() => console.log(totalAmount));

    // create order db entry
    // Order.create()

    // redirect to payment provider
    return res.redirect(303, "/bestellen/bevestiging");
}

// function addToAmount() {
//     return new Promise((resolve, reject) => {
//         data[1].products.forEach((item) => {
//             let id = item.id;
//             let amount = item.amount;
//             // console.log(item);
//             Article.findById(id, (err, foundItem) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     totalAmount += (foundItem.price * amount);
//                 }
//             });
//         });
//     });
// }



// CONFIRMATION
exports.confirmation = (req, res) => {
    res.render("./order/confirmation");
}