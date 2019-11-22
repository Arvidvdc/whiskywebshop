// array to collect items for shoppingcart
var shoppingCartArray = [];

// function to add items to shoppingcart array
var addItem = (name, price, ammount) => {
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