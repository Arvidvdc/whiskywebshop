window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("createOrderBtn").addEventListener('click', (event) => {
        sendOrder();
        event.preventDefault();
    });
});

async function sendOrder() {
    // get products and address from Storage
    let order = [];
    let addressData = JSON.parse(sessionStorage.getItem(address.key));
    order.push(addressData);
    let orderData = JSON.parse(localStorage.getItem(cart.Key));
    order.push(orderData);

    // fetch the data to the server
    await fetch('http://localhost:3000/bestellen/betalen', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order),
        mode: "cors",
    // redirect to the returned url
    }).then((response => {
        window.location.replace(response.url);
    }));
}