const express = require("express");
const authmiddlware = require("../middlewares/authmiddlware");
const { CreateFoodController, getFoodController, getSingleFoodController, getFoodByRestaurent, updateFoodController, deleteFoodController } = require("../controllers/foodController");



const router = express.Router();

// routers
// create Caegory 
router.post('/create', authmiddlware,CreateFoodController );

// get All Food Data
router.get('/get-all',getFoodController);

// Get Single Food Data
router.get('/get-data/:id',getSingleFoodController);

// Get food by restauernt
router.get('/get-foodRes/:id',getFoodByRestaurent);


// update food 
router.put('/update/:id',authmiddlware,updateFoodController );

// Delete Food 
router.delete('/delete/:id',authmiddlware,deleteFoodController)


module.exports = router;
