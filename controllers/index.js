const   Article     = require("../models/article"),
        passport    = require("passport"),
        User        = require("../models/user");

// Default controller
exports.default = (req,res)=>{
    Article.find({}, (err,foundArticles) => {
        if(err) {
            console.log("/ find article error: " + err);
        } else {
            res.render("./default/home", {articles: foundArticles});
        };
    });
}

// Register controllers
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

// Login controllers
exports.login = (req,res) => {
    res.render("./default/login");
}

exports.login_post =  passport.authenticate("local", {
    successRedirect: "/", 
    failureRedirect: "/registreren"
}), (req,res)=> {
       
}

// Profile controllers
exports.profile_edit = (req,res) => {
    User.findById(req.user._id, (err,user)=>{
        if(err){
            console.log("user.findById: " + err);
        } else {
            res.render("./default/profiel", {page: 'profiel', user: user});
        };
    });
}

// Logout controller
exports.logout = (req,res) => {
    req.logout();
    res.redirect("/");
}