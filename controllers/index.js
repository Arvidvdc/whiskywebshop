const   Article     = require("../models/article"),
        passport    = require("passport"),
        User        = require("../models/user");

// Default route
exports.default = (req,res)=>{
    Article.find({}, (err,foundArticles) => {
        if(err) {
            console.log("/ find article error: " + err);
        } else {
            res.render("./default/home", {articles: foundArticles});
        };
    });
}

// Register routes
exports.register = (req,res) => {
    res.render("./default/register", {page: 'registreren'});
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

// Login routses
exports.login = (req,res) => {
    res.render("./default/login");
}

exports.login_post =  passport.authenticate("local", {
    successRedirect: "/", 
    failureRedirect: "/registreren"
}), (req,res)=> {
       
};