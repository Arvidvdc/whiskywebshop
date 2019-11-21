// Require dependencies
const   express                     = require("express"), 
        router                      = express.Router(),
        shopping_cart_controller    = require("../controllers/shopping-cart");


// SHOW ROUTE
router.get("/", shopping_cart_controller.show);

// Export Router
module.exports = router;