// Require dependencies
const   express = require("express"),
        router = express.Router(),
        order_controller = require("../controllers/order");

//============
// ROUTES

// ORDER ROUTE
router.get("/", order_controller.order);

// PAYMENT ROUTE
router.get("/betalen", order_controller.payment);

router.post("/betalen", order_controller.payment_post);

// CONFIRMATION ROUTE
router.get("/bevestiging/:id", order_controller.confirmation);

// Export router
module.exports = router;
