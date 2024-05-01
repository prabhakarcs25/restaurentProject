const express = require("express");
const authmiddlware = require("../middlewares/authmiddlware");
const { createCategoryController, getAllCategoryController, updateCategoryControl, deleteCategoryController } = require("../controllers/categoryController");



const router = express.Router();

// routers
// create Caegory 
router.post('/create', authmiddlware,createCategoryController );

// get All category Data
router.get('/get-all',getAllCategoryController );


// update Data category 
router.put('/update/:id',authmiddlware,updateCategoryControl );

// Delete Catgory
router.delete('/delete/:categoryid',authmiddlware,deleteCategoryController)


module.exports = router;
