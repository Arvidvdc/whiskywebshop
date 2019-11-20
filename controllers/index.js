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
