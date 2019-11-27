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
        description: "Een van de bekendste whiskeys uit Ierland die zijn weerga niet kent. Het is een blended whiskey die van alle markten thuis is.",
        image: "https://images.pexels.com/photos/1534824/pexels-photo-1534824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Bowmore",
        price: 39.99,
        age: 12,
        distillery: "Bowmore",
        pallet: "Fruty",
        country: "Scotland",
        region: "Islay",
        description: "Een karakteristieke whisky van het eiland Islay waar de invloed van de zee zijn uitwerking heeft op de smaak van de whisky. Een whisky voor fijn proevers.",
        image: "https://cdn.pixabay.com/photo/2015/07/08/10/39/bowmore-835870_960_720.jpg"
    },
    {
        name: "Gallantry Whiskey",
        price: 5,
        age: 5,
        distillery: "Gallantry distilleries",
        pallet: "Corney",
        country: "USA",
        region: "Iowa",
        description: "Een zeer onbekende whiskey maar zeer kenmerkend van smaak. Zeker een whiskey die het proeven waard is.",
        image: "https://images.pexels.com/photos/2529468/pexels-photo-2529468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "GlenFiddich",
        price: 10,
        age: 12,
        distillery: "GlenFiddich",
        pallet: "pear",
        country: "Scotland",
        region: "Highlands",
        description: "Glen Fiddich is een distillerij die bekend staat om zijn experimentele whisky's. De 12 jaar oude is echter een standaard whisky met een fijne peer smaak die als basis dient voor de experimentele whisky's van Glen Fidich.",
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
        description: "Keep on Walking is de slogan van de Johnnie Walker distillerij. Dit thema brengen zijn tot hun recht in de vele films die zij sponsoren. ",
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