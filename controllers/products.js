const   Article = require("../models/article");    

//=====
// NEW
exports.new = (req, res) => {
    res.render("./products/new");
}

exports.new_post = (req, res) => {
    let product = req.body.product;
    console.log("Created: " +req.body.product.name);
    Article.create(product, (err, newProduct) => {
        if (err) {
            console.log(err);
            res.redirect("/producten/nieuw");
        } else {
            res.redirect("/");
        }
    });
}