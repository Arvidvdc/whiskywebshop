const address = {
    key: "987",
    contents: {},
    init() {
        // check for sessionStorage on this key
        let _address = sessionStorage.getItem(address.key);
        if (_address) {
            address.contents = JSON.parse(_address);
        } else {
            address.update();
        }
    },
    // get address
    getNewAddress() {
        address.contents = {
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
        address.update();
    },
    // put content to sessionStorage
    async update() {
        let newAddress = JSON.stringify(address.contents);
        await sessionStorage.setItem(address.key, newAddress);
    },
    logContent() {
        console.log(address.contents);
    }
}

// Add address function
function addAddress() {
    document.getElementById("addressBtn").addEventListener('click', (event) => {
        address.getNewAddress();
        window.location.replace("/bestellen/betalen");
        event.preventDefault();
    });
}

// initialize address on load and assign eventlistener to the button.
window.addEventListener("DOMContentLoaded", () => {
    address.init();
    if (document.getElementById("addressBtn")) {
        addAddress();
    }
});

