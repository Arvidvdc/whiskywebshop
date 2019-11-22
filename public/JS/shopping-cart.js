// const object to be saved into local storage
const cart = {
    // unique key to identify the cart
    Key: "123456",
    order: []
    // function to start on page load that checks if a cart already exists
    init() {
        let existing-content = localStorage.getItem(cart.Key);
        if (existing-content) {
            cart.order = JSON.parse(existing-content);
        } else {
            cart.sync();
        }
    },
    // function to synchronize cart to localstorage
    async sync() {
        let current = JSON.stringify(cart.order);
        await localStorage.setItem(cart.Key, current);
    },
}
// array to collect items for shoppingcart

// function to add items to shoppingcart array
addItem = (name, price, amount) => {
    let newOrder = {
        name: name,
        price: price,
        amount: amount
    }
    let exists;
    let index = -1;
    cart.order.forEach(item => {
        ++index;
        exists = Object.keys(item).some((i) => {
            return item[i] === name;
        });
        console.log(exists);
        return exists;
    });
    if (exists) {
        console.log('newOrder ' + newOrder.amount);
        shoppingCartArray[index].amount += newOrder.amount;
        return shoppingCartArray;
    }
    shoppingCartArray.push(newOrder);
    return shoppingCartArray;
}