const express = require("express");
const authmiddlware = require("../middlewares/authmiddlware");
const {
  createRestaurentController,
  getAllRestaurentController,
  getRestaurentById,
  deleteRestaurentController,
} = require("../controllers/restaurentController");
const router = express.Router();

// routers
// create Restaurent
router.post("/create", authmiddlware, createRestaurentController);

// Get All Restaurent data || Get data

router.get("/get-alldata", getAllRestaurentController);

// Get Restaurent data by Id
router.get("/get/:id", getRestaurentById);

// Delete Restaurent data
router.get("/delete/:id", authmiddlware, deleteRestaurentController);

module.exports = router;
