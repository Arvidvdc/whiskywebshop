// Require dependencies
const   express             = require("express"), 
        router              = express.Router(),
        index_controller    = require("../controllers/index");
        
// DEFAULT ROUTE
router.get("/", index_controller.default);

// SORT ROUTE
router.get("/sort", index_controller.sortPrice);

// Export Router
module.exports = router;