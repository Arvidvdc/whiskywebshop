const   User            = require("../models/user"),
        middlewareObj   = {};

middlewareObj.isLoggedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/login");
    };
};

middlewareObj.isOperator = (req,res,next) => {
    if(req.isAuthenticated()) {
        let testUser= req.user.role;
        let regex = RegExp('operator');
        if(regex.test(testUser)) {
            return next();
        } else {
            console.log("middlewareObj.isOperator: Ingelogde gebruiker heeft geen rechten.");
            res.redirect("back");
        }
    } else {
        console.log("middlewareObj.isOperator: Niet ingelogd.");
        res.redirect("/login");
    }
}

module.exports = middlewareObj;