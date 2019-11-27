// Require dependencies
const   express             = require("express"), 
        router              = express.Router(),
        index_controller    = require("../controllers/index");
        
// DEFAULT ROUTE
router.get("/", index_controller.default);

// Export Router
module.exports = router;