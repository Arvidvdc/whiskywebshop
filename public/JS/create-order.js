window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("createOrderBtn").addEventListener('click', (event) => {
        createOrder();
        event.preventDefault();
    });
});



function createOrder() {
    let order = [];
    let addressData = JSON.parse(sessionStorage.getItem(address.key));
    order.push(addressData);
    let orderData = JSON.parse(localStorage.getItem(cart.Key));
    order.push(orderData);
    console.log(order);
    sendOrder(order);
}

function sendOrder(data) {
    const XHR = new XMLHttpRequest();
    const FD = new FormData();

    // pushing data into FormData object
    for (name in data) {
        FD.append(name, data[name]);
    }

    // if succes
    XHR.addEventListener('load', (event) => {
        // alert("Order besteld");
        // window.location.replace("/bestellen/bevestiging");
    });

    // if error
    XHR.addEventListener('error', (event) => {
        alert("Er ging iets verkeerd...");
    });

    // setting up request
    XHR.open('POST', 'http://localhost:3000/bestellen/betalen');

    XHR.send(FD);
}