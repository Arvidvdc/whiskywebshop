const   express         = require("express"),
        app             = express(),
        mongoose        = require("mongoose"),
        bodyParser      = require("body-parser"), 
        Article         = require("./models/article");

// const   indexRoutes     = require("./routes/index");

// Express variables
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Database connection
mongoose.connect("mongodb://localhost:27017/whiskywebshop", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


// Routes
// app.use(indexRoutes); 

// listener
app.listen(3000, ()=>console.log("Whisky Webshop started on port 3000"));