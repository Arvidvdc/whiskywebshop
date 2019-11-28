// var for to define sorting order
var sortOrder = "asc";

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
            let aVal = parseFloat(a.getAttribute("data-price")).toFixed(2);
            let bVal = parseFloat(b.getAttribute("data-price")).toFixed(2);
            if (sortOrder === "asc") {
                return aVal - bVal;
            } else {
                return bVal - aVal
            }
        });
        if (sortOrder === "desc") {
            sortOrder = "asc";
        } else {
            sortOrder = "desc";
        }
        $("#articles").append(sortedA);
        event.preventDefault
    });
}