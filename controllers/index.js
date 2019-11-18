const Article = require("../models/article");


// DEFAULT
exports.default = (req,res)=>{
    res.render("home");
};