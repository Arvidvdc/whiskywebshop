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
    let newOrder = {
        name: name,
        price: price,
        ammount: ammount
    }
    let exists;
    let index = -1;
    shoppingCartArray.forEach(item => {
        ++index;
        exists = Object.keys(item).some((i) => {
            return item[i] === name;
        });
        console.log(exists);
        return exists;
    });
    if (exists) {
        console.log('newOrder ' + newOrder.ammount);
        shoppingCartArray[index].ammount += newOrder.ammount;
        return shoppingCartArray;
    }
    shoppingCartArray.push(newOrder);
    return shoppingCartArray;
}

// create variables for  desired tags
var productsName = "",
    productsPrice = "",
    productsAmmount = "";
    orderButtons = "";

// add tags to arrays
function getProducts() {
    productsName = $("label[product-name]");
    productsPrice = $("label[product-price]");
    productsAmmount = $("input[name]");
    orderButtons = $("button");
}

// start functionality on window load
window.onload = () => {
    getProducts();
    // add event listener to order buttons as trigger for addItem function
    orderButtons.forEach((button) => {
        let index = 0;
        button.addEventListener('click', () => {
            let name = productsName[index],
                price = productsPrice[index],
                ammount = productsAmmount[index].valueOf();
            if (ammount === undefined) {
                ammount = 1;
            }
            addItem(name, price, ammount);
        });
        ++index;
    });
}