// Require dependencies
const   express             = require("express"), 
        router              = express.Router(),
        index_controller    = require("../controllers/index");
        
// DEFAULT ROUTE
router.get("/", index_controller.default);

// Register routes
router.get("/registreren", index_controller.register);

router.post("/registreren", index_controller.register_post);

// Login routes
router.get("/login", index_controller.login);

router.post("/login", index_controller.login_post);

// Export Router
module.exports = router;