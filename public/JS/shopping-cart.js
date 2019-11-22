// const object to be saved into local storage
const cart = {
   
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