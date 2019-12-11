const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String,
    company: String,
    firstname: String,
    lastname: String,
    zipcode: String,
    nr: String,
    phone: String,
    street: String,
    city: String 
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);