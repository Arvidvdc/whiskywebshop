// const object to be saved into local storage
const cart = {
    // unique key to identify the cart
    Key: "123456",
    order: [{id:1}],
    // function to start on page load that checks if a cart already exists
    init() {
        let existingContent = localStorage.getItem(cart.Key);
        if (existingContent) {
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
    // function to find product in cart object
    find(id) {
        // create a true statement if product exists in order array
        let found = cart.order.filter(item => {
            if(item.id == id){
                return true;
            }
        });
        console.log(found + " " + found[0]);
        // return found product
        if (found && found[0]){
            return found[0];
        }
    },
    // add product to cart, standard ammount is one, if other value is given that overrides 
    add(id, addAmm=1) {
        // check if product exists in db
        if(cart.find(id)){
            cart.increase(id, addAmm);
        } else {
            let arr = articles.filter(product => {
                if (product.id == id) {
                    return true;
                }
            });
            // check if product exists in db  add product to order array
            if (arr && arr[0]) {
                let prod = {
                    id:     arr[0].id,
                    name:   arr[0].name,
                    amount: addAmm,
                    Price:  arr[0].price
                };
                cart.order.push(prod);
                cart.sync();
            } else {
                console.log("invalid product");
            }
        }
    },
    // function to increase ammount ordered
    increase(id, am){
        cart.order = cart.order.map(item =>{
            if (item.id == id) {
                item.amount += am;
                return item;
            }
        });
        cart.sync();
    },
}

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