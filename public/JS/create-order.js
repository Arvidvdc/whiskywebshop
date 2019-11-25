

function createOrder() {
    var order = sessionStorage.getItem(address.key);
    sendOrder(order);
}

function sendOrder(data) {
    const XHR = new XMLHttpRequest();
    const FD = new FormData();

    // pushing data into FormData object
    for(name in data) {
        FD.append(name, data[name]);
    }

    // if succes
    XHR.addEventListener('load', (event) => {
        alert("Order created.");
    });

    // if error
    XHR.addEventListener('error', (event) => {
        alert("something went wrong...");
    });

    // setting up request
    XHR.open('POST', 'http://localhost:3000/bestellen/betalen');

    XHR.send(FD);
}