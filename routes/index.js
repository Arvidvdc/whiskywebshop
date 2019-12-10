// Require dependencies
const   express             = require("express"), 
        router              = express.Router(),
        index_controller    = require("../controllers/index");
        
// DEFAULT ROUTE
router.get("/", index_controller.default);

// Register routes
router.get("/registreren", index_controller.register);

router.post("/registreren", index_controller.register_post);

// Export Router
module.exports = router;