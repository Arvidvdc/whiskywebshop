const address = {
    key: "987",
    contents: {},
    init() {
        // check for sessionStorage on this key
        let _address = sessionStorage.getItem(address.key);
        if (_address) {
            address.contents = JSON.parse(_address);
            console.log("found contents!");
        } else {
            // test address
            address.contents = {
                address: {
                    company: "",
                    firstname: "Fred",
                    lastname: "Malloy",
                    zipcode: "904257 TB",
                    nr: "34A",
                    phone: "0635654975",
                    street: "Vissersstraat",
                    city: "Zwolle"
                }
            };
            address.update();
            console.log("updated contents!");
        }
    },
    async update() {
        let newAddress = JSON.stringify(address.contents);
        await sessionStorage.setItem(address.key, newAddress);
    },
    logContent() {
        console.log(address.contents);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    address.init();
    console.log("address initialized");
});