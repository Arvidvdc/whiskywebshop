
// SHOW
exports.show = (req,res) => {
    let order=[{id: "qweqwfgergthtry", name: "Jameson", price: 10.50, amount:1, image: "https://cdn.pixabay.com/photo/2017/11/12/15/14/whiskey-2942734_960_720.jpg"},{id: "123123456", name: "Jack Daniels", price: 5.25, amount:2, image: "https://cdn.pixabay.com/photo/2018/03/04/09/26/drink-3197547_960_720.jpg"},{id: "ddsf027n32", name: "Johnny Walker Red Label", price: 19.50, amount:1, image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h95/hd8/11785453305886.png"}]
    res.render("./shopping-cart/show.ejs", {order: order});
}