// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        product_controller  = require("../controllers/products"),
        middleware          = require("../middleware/index");

// NEW ROUTE
router.get("/nieuw", middleware.isLoggedIn, product_controller.new);

// POST ROUTE
router.post("/nieuw", middleware.isLoggedIn, product_controller.new_post);

// Export Router
module.exports = router;