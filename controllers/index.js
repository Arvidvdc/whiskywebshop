const Article = require("../models/article");

// DEFAULT
exports.default = (req,res)=>{
    Article.find({}, (err,foundArticles) => {
        if(err) {
            console.log("/ find article error: " + err);
        } else {
            res.render("./default/home", {articles: foundArticles});
        };
    });
};

// SORTPRICE
exports.sortPrice = (req,res) =>{
    Article.find({}).sort("price").exec((err,foundArticles)=>{
        if(err) {
            console.log("/ find article error: " + err);
        } else {
            res.render("./default/home", {articles: foundArticles});
        };
    });
    
}