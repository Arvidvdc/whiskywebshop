// const object to be saved into local storage
const cart = {
    // unique key to identify the cart
    Key: "123456",
    order: [],
    // function to start on page load that checks if a cart already exists
    init() {
        let existingContent = localStorage.getItem(cart.Key);
        if (existingContent) {
            cart.order = JSON.parse(existingContent);
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
        console.log("find func " + found + " " + found[0]);
        // return found product
        if (found && found[0]){
            return found[0];
        }
    },
    // add product to cart, standard amount is one, if other value is given that overrides 
    add(id, addAmm=1) {
        // check if product exists in db
        if(cart.find(id)){
            cart.increase(id, addAmm);
        } else {
            let arr = loadedProd.filter(product => {
                if (product.id == id) {
                    return true;
                }
            });
            console.log("arr find " + arr);
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
    // function to increase amount ordered
    increase(id, am){
        cart.order = cart.order.map(item => {
            if (item.id == id) {
                item.amount += am;
                return item;
            }
        });
        cart.sync();
    }
}

// known products array
const loadedProd = [];

// function to load known products into array, to check if product exists
function load() {
    let test = document.getElementsByClassName('article');
    for (let i = 0; i < test.length; i++) {
        console.log(test[i].dataset.price);
        var name = test[i].dataset.name,
            price = test[i].dataset.price,
            id = test[i].dataset.id;
        
        loadedProd.push({
            id:     id,
            name:   name,
            price:  price
        });
        
    }
    return loadedProd;
}

// function to add listeners to add to order buttons
function listeners() {
    let buttons = document.getElementsByName("orderBTN");
    console.log(buttons);
    buttons.forEach(BTN => {
        let i = 0;
        BTN.addEventListener('click', () => {
            let qty = document.getElementById(buttons[i].value).value;
            console.log(qty);
            console.log("btn value " + BTN.value);
            cart.add(BTN.value, qty);
        });
        ++i;
    });
    
}
// start all basic functions that need to run on page load
document.addEventListener('DOMContentLoaded', () => {
    cart.init();
    listeners();
    load();
});

function totalPrice(){
    var articles = document.querySelectorAll(".article");
    var totalPriceCart=0;
    for(let i=0; i<articles.length;i++){
        let subtotal=articles[i].dataset.price * articles[i].dataset.amount;
        totalPriceCart+=subtotal;
    }
    document.getElementById("TotalAmount").innerText="€ " + totalPriceCart.toFixed(2).replace(".",",")
}
