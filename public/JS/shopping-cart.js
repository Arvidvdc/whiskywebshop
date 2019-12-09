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
                    price:  arr[0].price,
                    image:  arr[0].image
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
        cart.order.forEach(item => {
            if (item.id === id) {
                let calc1 = parseInt(item.amount, 10),
                    calc2 = parseInt(am, 10);
                item.amount = calc1 + calc2;
                document.getElementById(id).value=item.amount;
                console.log(id);
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
        let name = test[i].dataset.name,
            price = test[i].dataset.price,
            id = test[i].dataset.id,
            image = test[i].dataset.image;
        loadedProd.push({
            id:     id,
            name:   name,
            price:  price,
            image:  image
        });
        
    }
    return loadedProd;
}

function Bennie() {
    let qty = document.getElementById(this.value).value;
    if(qty==0 || qty === ""){
        document.getElementById(this.value).value=1;
        qty = 1;
    }
    cart.add(this.value, qty);
}

// function to add listeners to add to order buttons
function listeners() {
    let buttons = document.getElementsByName("AddToBTN");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', Bennie);
    }
}

// start all basic functions that need to run on page load
document.addEventListener('DOMContentLoaded', () => {
    cart.init();
    listeners();
    load();
    buildCart();
    totalPrice();
});

// function that calculates and creates the total price shown on shopping cart page
function totalPrice(){
    var totalPriceCart=0;
    cart.order.forEach(ordprod => {
        let subTotal = ordprod.price * ordprod.amount;
        totalPriceCart += subTotal;
    });
    if(totalPriceCart<0) {
        document.getElementById("AddToBTN").disabled=true;
    }
    document.getElementById("TotalAmount").innerText="€ " + totalPriceCart.toFixed(2).replace(".",",")
}

// function that builds the shopping cart based on and with data from localstorage key
function buildCart(){
    let orderList = document.getElementById('orderList');
    cart.order.forEach(showprod => {
        showprod.price = parseFloat(showprod.price);

        let articleDiv = document.createElement('div');
        articleDiv.className = "article";
        articleDiv.dataset.id = showprod.id;
        articleDiv.dataset.amount = showprod.amount;

            let divRow = document.createElement('div');
            divRow.className = "row";

                let divImgCol = document.createElement('div');
                divImgCol.className = "col col-md-1";
                    let img = document.createElement('img');
                    img.className = "cart-image";
                    img.src = showprod.image;
                    divImgCol.appendChild(img);
                divRow.appendChild(divImgCol);
                
                let divArtName = document.createElement('div');
                divArtName.className = "col col-md-3";
                    let artName = document.createElement('div');
                    artName.textContent = showprod.name;
                    divArtName.appendChild(artName);
                divRow.appendChild(divArtName);

                let divArtPrice = document.createElement('div');
                divArtPrice.className = "col col-md-2";
                    let artPrice = document.createElement('div');
                    artPrice.textContent = "€ " + showprod.price.toFixed(2).replace(".",",");
                    divArtPrice.appendChild(artPrice);
                divRow.appendChild(divArtPrice);

                let divArtAmount = document.createElement('div');
                divArtAmount.className = "col col-md-3";
                    let artAmount = document.createElement('div');
                    artAmount.textContent = showprod.amount;
                    divArtAmount.appendChild(artAmount);
                divRow.appendChild(divArtAmount);

                let divArtTotPr = document.createElement('div');
                divArtTotPr.className = "col col-md-3";
                    let artTotPr = document.createElement('div');
                    artTotPr.textContent = "€ " + (showprod.price * showprod.amount).toFixed(2).toString(this).replace(".",",");
                    divArtTotPr.appendChild(artTotPr);
                divRow.appendChild(divArtTotPr);

            articleDiv.appendChild(divRow);

        orderList.appendChild(articleDiv);

    });
}