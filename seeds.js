const   mongoose    = require("mongoose"),
        Article     = require("./models/article");

let data=[
    {
        name: "Jameson",
        price: 19.5,
        age: 10,
        distillery: "Jameson and son",
        pallet: "Fruty",
        country: "Ireland",
        region: "Dublin",
        description: "Blend"
    },
    {
        name: "Highland Park",
        price: 10,
        age: 15,
        distillery: "Highland Park",
        pallet: "Fruty",
        country: "Scotland",
        region: "Highlands",
        description: "Blend"
    },
    {
        name: "Jack Daniels",
        price: 5,
        age: 5,
        distillery: "Jack Daniels distilleries",
        pallet: "Corney",
        country: "USA",
        region: "Iowa",
        description: "Bourbon"
    },
    {
        name: "GlenFiddich",
        price: 10,
        age: 12,
        distillery: "GlenFiddich",
        pallet: "pear",
        country: "Scotland",
        region: "Highlands",
        description: "Single malt, delicious"
    },
];

function seedDB(){
    // Remove all whiskeys
    Article.remove({}, (err)=> {
        if(err){
            console.log(err);
        }
        console.log("Removed whiskeys");
    },
    // Add whiskeys
    data.forEach((seed) => {
        Article.create(seed, (err,article)=>{
            if(err){
                console.log("seedDB error:" + err);
            } else {
                console.log(article);
            };
        });
    }));
};

module.exports = seedDB;