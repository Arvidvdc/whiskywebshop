const   express               = require("express"),
        app                   = express(),
        mongoose              = require("mongoose"),
        bodyParser            = require("body-parser"), 
        seedDB                = require("./seeds");

const   indexRoutes           = require("./routes/index"),
        productsRoutes        = require("./routes/products"),
        shoppingcartsRoutes   = require("./routes/shopping-cart"),
        orderRoutes           = require("./routes/order");

// dotENV
require('dotenv').config();

// Express variables
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({ limit: "1mb" }));

// Database connection
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false}).then(
        () => {
          console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

// Seeden database with default data
// seedDB();

// Routes
app.use(indexRoutes); 
app.use("/producten", productsRoutes);
app.use("/winkelwagen", shoppingcartsRoutes);
app.use("/bestellen", orderRoutes);

// listener
app.listen(process.env.PORT, process.env.IP, ()=>console.log("Whisky Webshop started on port " + process.env.PORT));