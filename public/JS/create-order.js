window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("createOrderBtn").addEventListener('click', (event) => {
        sendOrder();
        event.preventDefault();
    });
});

// const testarticles = [
//     {
//         id: "5ddbdb00acfc8f4f145a138e",
//         amount: 2
//     },
//     {
//         id: "5ddbdb00acfc8f4f145a138f",
//         amount: 3
//     },
//     {
//         id: "5ddbdb00acfc8f4f145a1390",
//         amount: 1
//     },
//     {
//         id: "5ddbdb00acfc8f4f145a1391",
//         amount: 2
//     },
//     {
//         id: "5ddbdb00acfc8f4f145a1392",
//         amount: 5
//     }
// ]

async function sendOrder() {
    // get products and address from Storage
    let order = [];
    let addressData = JSON.parse(sessionStorage.getItem(address.key));
    order.push(addressData);
    let articleData = JSON.parse(localStorage.getItem(cart.Key));
    let articles = { articles: [] };
    articles.articles = articleData;
    order.push(articles);

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