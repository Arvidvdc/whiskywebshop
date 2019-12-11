// Require dependencies
const   express             = require("express"), 
        router              = express.Router(),
        index_controller    = require("../controllers/index"),
        middleware          = require("../middleware/index");
        
// DEFAULT ROUTE
router.get("/", index_controller.default);

// Register routes
router.get("/registreren", index_controller.register);

router.post("/registreren", index_controller.register_post);

// Login routes
router.get("/login", index_controller.login);

router.post("/login", index_controller.login_post);

// Profile routes
router.get("/profiel", middleware.isLoggedIn,  index_controller.profile_edit);

// Logout route
router.get("/loguit", index_controller.logout);

// Export Router
module.exports = router;