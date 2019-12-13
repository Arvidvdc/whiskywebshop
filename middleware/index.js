const   User            = require("../models/user"),
        middlewareObj   = {};

middlewareObj.isLoggedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/login");
    };
};



module.exports = middlewareObj;