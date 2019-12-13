// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        product_controller  = require("../controllers/products"),
        middleware          = require("../middleware/index");

// NEW ROUTE
router.get("/nieuw", middleware.isOperator, product_controller.new);

// POST ROUTE
router.post("/nieuw", middleware.isOperator, product_controller.new_post);

// Export Router
module.exports = router;