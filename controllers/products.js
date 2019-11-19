const   Article = require("../models/article");    

//=====
// NEW
exports.new = (req, res) => {
    res.render("./products/new");
}

exports.new_post = (req, res) => {
    let product = req.body.product;
    console.log(req.body.product);
    // res.send("creating product" + product.name);
    Article.create(product, (err, newProduct) => {
        if (err) {
            console.log(err);
            res.redirect("/products/new");
        } else {
            console.log("created product: " + req.body.product.name);
            res.redirect("/products/new");
        }
    });
}