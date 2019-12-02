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
    const orderData = req.body;

    //get the total amount
    let totalAmount = 0;
    orderData[1].articles.forEach((item) => {
        let price = Number(item.amount) * Number(item.price);
        totalAmount = totalAmount + price
    });
    roundedAmount = totalAmount.toFixed(2);

    // create article array
    articles = [];
    orderData[1].articles.forEach((item) => {
        let article = {
            _id: item.id,
            name: item.name,
            amount: item.amount
        }
        articles.push(article);
    });

    // create order variable
    let order = {
        amount: roundedAmount,
        articles: articles,
        address: orderData[0].address,
        orderedAt: creationTime
    }

    // create order db entry
    Order.create(order, (err, newOrder) => {
        if (err) {
            console.log(err);
            return res.send(err);
        } else {
            // redirect to confirmation page
            return res.redirect(303, "/bestellen/bevestiging/" + newOrder._id);
        }
    });
}

// CONFIRMATION
exports.confirmation = (req, res) => {
    Order.findById(req.params.id, (err, foundOrder) => {
        if (err) {
            console.log(err);
            res.redirect("/bestellen/betalen");
        } else {
            res.render("./order/confirmation", { order: foundOrder});
        }
    });
    // res.render("./order/confirmation");
}