const express = require("express");
const authmiddlware = require("../middlewares/authmiddlware");
const { placeFoodOrder, orderStatusController } = require("../controllers/orderController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

// create order
router.post('/place-order',authmiddlware,placeFoodOrder)


// order Status
router.post('/orderStatus/:id',adminMiddleware,orderStatusController)



module.exports = router;