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
    let articleData = JSON.parse(localStorage.getItem(cart.Key));
    let articles = { articles: [] };
    articles.articles = articleData;
    order.push(articles);

    let url = window.location.href;

    // fetch the data to the server
    await fetch(url, {
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