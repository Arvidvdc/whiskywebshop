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
        description: "Blend",
        image: "https://cdn.pixabay.com/photo/2017/11/12/15/14/whiskey-2942734_960_720.jpg"
    },
    {
        name: "Bowmore",
        price: 39.99,
        age: 12,
        distillery: "Bowmore",
        pallet: "Fruty",
        country: "Scotland",
        region: "Islay",
        description: "Single Malt",
        image: "https://cdn.pixabay.com/photo/2015/07/08/10/39/bowmore-835870_960_720.jpg"
    },
    {
        name: "Jack Daniels",
        price: 5,
        age: 5,
        distillery: "Jack Daniels distilleries",
        pallet: "Corney",
        country: "USA",
        region: "Iowa",
        description: "Bourbon",
        image: "https://cdn.pixabay.com/photo/2018/03/04/09/26/drink-3197547_960_720.jpg"
    },
    {
        name: "GlenFiddich",
        price: 10,
        age: 12,
        distillery: "GlenFiddich",
        pallet: "pear",
        country: "Scotland",
        region: "Highlands",
        description: "Single malt, delicious",
        image: "https://cdn.pixabay.com/photo/2016/10/13/15/37/bottles-1738057_960_720.jpg"
    },
    {
        name: "Johnnie Walker",
        price: 19.99,
        age: 12,
        distillery: "Diageo",
        pallet: "Gebalanceerd en Ziltig",
        country: "Scotland",
        region: "Highlands",
        description: "Blend, gangbare smaak",
        image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h95/hd8/11785453305886.png"
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