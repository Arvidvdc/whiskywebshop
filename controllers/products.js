const   Article = require("../models/article");    

// NEW
exports.new = (req, res) => {
    res.render("./products/new");
}

exports.new_post = (req, res) => {
    let product = req.body.product;
    Article.create(product, (err, newProduct) => {
        if (err) {
            console.log("Error in 'Add new product': " +err);
            res.redirect("/producten/nieuw");
        } else {
            res.redirect("/");
        }
    });
}