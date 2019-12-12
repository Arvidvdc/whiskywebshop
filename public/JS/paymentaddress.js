async function sendOrder() {
    // get products from storage and address from form
    let order = [];

    let addressData = {
        address: {
            company: document.getElementsByName("company")[0].value,
            firstname: document.getElementsByName("firstname")[0].value,
            lastname: document.getElementsByName("lastname")[0].value,
            zipcode: document.getElementsByName("zipcode")[0].value,
            nr: document.getElementsByName("nr")[0].value,
            phone: document.getElementsByName("phone")[0].value,
            street: document.getElementsByName("street")[0].value,
            city: document.getElementsByName("city")[0].value
        }
    };
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
    }).then((response) => {
        window.location.href = response.url;
    });
}

// add eventlistener
window.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("addressBtn")) {
        document.getElementById("addressBtn").addEventListener('click', (event) => {
            sendOrder();
            event.preventDefault();
        });
    }
});

