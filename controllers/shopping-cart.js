
// SHOW
exports.show = (req,res) => {
    let order=[{id: "qweqwfgergthtry", name: "Jameson", price: 10.50, amount:1},{id: "123123456", name: "Jack Daniels", price: 5.25, amount:2},{id: "ddsf027n32", name: "Johnny Walker Black Label", price: 19.50, amount:1}]
    res.render("./shopping-cart/show.ejs", {order: order});
}