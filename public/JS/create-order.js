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
<<<<<<< HEAD
    await fetch(url, {
=======
    await fetch(process.env.URL_FETCH_ORDER, {
>>>>>>> 6a1c773a4622b18b74007c8c39c6deb5444ae1c9
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