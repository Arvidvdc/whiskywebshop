// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        product_controller  = require("../controllers/products");

// NEW ROUTE
router.get("/nieuw", product_controller.new);

// POST ROUTE
router.post("/nieuw", product_controller.new_post);

// Export Router
module.exports = router;