const Order = require("../models/order"),
    Article = require("../models/article"),
    { createMollieClient } = require('@mollie/api-client'),
    mollieClient = createMollieClient({ apiKey: "test_hUgDRy7uGxV5tRrF8pcFxB5TREA2ed" });

// ORDER
exports.order = (req, res) => {
    res.render("./order/order");
}

exports.order_post = (req, res) => {
    // assign req.body to orderData
    const orderData = req.body;

    // get currentDate for creation time
    let ts = Date.now();
    let creationTime = new Date(ts);

    //get the total amount
    let totalAmount = 0;
    orderData[1].articles.forEach((item) => {
        let price = Number(item.amount) * Number(item.price);
        totalAmount = totalAmount + price
    });
    let roundedAmount = totalAmount.toFixed(2);
    let stringAmount = roundedAmount + "";

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
        amount: stringAmount,
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
            // redirect to payment overview page
            res.redirect(303, "/bestellen/betalen/" + newOrder._id);
        }
    });
}

// PAYMENT
exports.payment = (req, res) => {
    res.render("./order/payment", { orderId: req.params.id });
}

exports.payment_post = (req, res) => {
    let orderId = req.params.id;
    // res.send("posted to " + req.params.id);
    Order.findById(orderId, (err, foundOrder) => {
        if (err) {
            console.log(err);
            return res.redirect("/bestellen");
        } else {
            let orderAmount = foundOrder.amount;
            let desc = "Ordernr: " + orderId;
            let siteUrl = "https://0ae8e041.ngrok.io/";
            let redirUrl = siteUrl + "bestellen/bevestiging/" + orderId;
            let webhook = siteUrl + "bestellen/webhook";
            // res.send(orderId);
            // create mollie payment
            (async () => {
                try {
                    const payment = await mollieClient.payments.create({
                        amount: {
                            currency: 'EUR',
                            value: orderAmount, // You must send the correct number of decimals, thus we enforce the use of strings
                        },
                        description: desc,
                        redirectUrl: redirUrl,
                        webhookUrl: webhook,
                        metadata: {
                            order_id: orderId,
                        },
                    });

                    // redirecting customer to mollie payment
                    res.redirect(303, payment.getCheckoutUrl());
                } catch (error) {
                    console.warn(error);
                }
            })();
        }
    })
}

// webhook
exports.webhook = (req, res) => {

    mollieClient.payments
        .get(req.body.id)
        .then(payment => {
            Order.findByIdAndUpdate(payment.metadata.order_id, { status: payment.status }, (err, order) => {
                if (err) {
                    console.log(err);
                }
            });
            res.send(payment.status);
        })
        .catch(error => {
            // Do some proper error handling.
            res.send(error);
        });
}

// CONFIRMATION
exports.confirmation = (req, res) => {
    Order.findById(req.params.id, (err, foundOrder) => {
        if (err) {
            console.log(err);
            res.redirect("/bestellen/betalen");
        } else {
            res.render("./order/confirmation", { order: foundOrder });
        }
    });
}