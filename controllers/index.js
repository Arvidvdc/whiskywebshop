const   Article     = require("../models/article"),
        passport    = require("passport"),
        User        = require("../models/user");

// DEFAULT
exports.default = (req,res)=>{
    Article.find({}, (err,foundArticles) => {
        if(err) {
            console.log("/ find article error: " + err);
        } else {
            res.render("./default/home", {articles: foundArticles});
        };
    });
}

exports.register = (req,res) => {
    res.render("./default/register.ejs", {page: 'registreren'});
}

exports.register_post = (req,res) => {
    let newUser = new User({username: req.body.username, email: req.body.email, role: 'user'});
    User.register(newUser, req.body.password , (err, user)=>{
        if(err) {
            res.redirect("/registreren");
        }
        passport.authenticate("local")(req,res, function(){
            res.redirect("/");
        });
    });
}