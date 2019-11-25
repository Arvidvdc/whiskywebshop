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
        // return found product
        if (found && found[0]){
            return found[0];
        }
    },
    // add product to cart, standard amount is one, if other value is given that overrides 
    add(id, addAmm) {
        // check if product exists in db
        if(cart.find(id)){
            cart.increase(id, addAmm);
        } else {
            let arr = loadedProd.filter(product => {
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
    // function to increase amount ordered
    increase(id, am){
        cart.order = cart.order.map(item => {
            if (item.id === id) {
                if (item.amount === undefined || item.amount === null || item.amount === ""){
                    item.amount = 1;
                }
                let calc1 = parseInt(item.amount, 10),
                    calc2 = parseInt(am, 10);
                item.amount =  calc1 + calc2;
                // return item;
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
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            var btnid = buttons[i].value
            let qty = document.getElementById(btnid).value;
            if (qty === ""){
                qty = 1;
            }
            cart.add(btnid, qty);
        });
    }
    
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
