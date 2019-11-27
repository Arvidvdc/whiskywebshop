// defining var article for later use
var articles = "";

window.onload = () => {
    getArticles();
    handleSorting();
}

// gets all articles currently in the DOM
function getArticles() {
    articles = $("div[data-price]");
}

// Handles all sorting functions
function handleSorting() {
    sortByPrice();
}

// Sorts items based on price low > high
function sortByPrice() {
    $("#sortPrice").on("click", (event) => {
        let sortedA = articles;

        sortedA.sort((a, b) => {
            let aVal = parseInt(a.getAttribute("data-price"));
            let bVal = parseInt(b.getAttribute("data-price"));
            return aVal - bVal;
        });
        $("#articles").append(sortedA);
        event.preventDefault
    });
}