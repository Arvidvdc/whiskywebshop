// Require dependencies
const   express = require("express"),
        router = express.Router(),
        order_controller = require("../controllers/order");

//============
// ROUTES

// ORDER ROUTE
router.get("/", order_controller.order);

router.post("/", order_controller.order_post)

// PAYMENT ROUTE
router.get("/payment", order_controller.payment);

router.put("/payment", order_controller.payment_update);

// Export router
module.exports = router;
