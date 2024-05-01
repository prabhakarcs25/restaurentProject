const express = require("express");
const {
  getUserController,
  updateController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authmiddlware = require("../middlewares/authmiddlware");

// router Object
const router = express.Router();

// router||  GET user data
router.get("/get-user", authmiddlware, getUserController);

// roter || update user data
router.put("/update-user", authmiddlware, updateController);

// update password update || POST
router.post("/update-password", authmiddlware, updatePasswordController);

//  Reset Password || POST
router.post('/reset-password',authmiddlware,resetPasswordController)

// Delete Data 
router.delete('/delete-user/:id',authmiddlware,deleteProfileController)

// export
module.exports = router;
