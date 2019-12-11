// Require dependencies
const   express = require("express"),
        router = express.Router(),
        order_controller = require("../controllers/order");

//============
// ROUTES

// ORDER ROUTE
router.get("/", order_controller.order);

router.get("/", order_controller.order_post);

// PAYMENT ROUTE
router.get("/betalen/:id", order_controller.payment);

router.post("/betalen/:id", order_controller.payment_post);

router.post("/webhook", order_controller.webhook);

// CONFIRMATION ROUTE
router.get("/bevestiging/:id", order_controller.confirmation);

// Export router
module.exports = router;
