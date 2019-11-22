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
            console.log("created product: " + req.body.product.name);
            res.redirect("/");
        }
    });
}

// array to collect items for shoppingcart
var shoppingCartArray = [];

// function to add items to shoppingcart array
function addItem(name, price, ammount) {
    if (ammount == 0) {
        ammount = 1;
    }
    let newOrder = {
        name: name,
        price: price,
        ammount: ammount
    }
    for
    shoppingCartArray.forEach(item => {
        var exists = Object.keys(item).some((i) => {
            return item[i] === name;
        });
        console.log(exists);
        return exists;
    });
    if (exists) {
        console.log('newOrder ' + newOrder.ammount);
        console.log('item ' + item.ammount);
        item.ammount += newOrder.ammount;
        return shoppingCartArray;
    }
    shoppingCartArray.push(newOrder);
    return shoppingCartArray;
}
