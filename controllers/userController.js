const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

//  Get User Data
const getUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id }); //,{_id:0} for remove id in friunt of user data
    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Fech user Data successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get user Data",
    });
  }
};

// Update Data but not password
const updateController = async (req, res) => {
  try {
    // find user
    const user = await userModel.findById({ _id: req.body.id });
    // validate user
    if (!user) {
      res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    // updateeee
    const { username, address, phone, answer } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    if (answer) user.answer = answer;

    await user.save();
    res.status(200).send({
      success: true,
      messagge: "user Data update successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// update password only
const updatePasswordController = async (req, res) => {
  try {
    // user find
    const user = await userModel.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    // get user password from user
    const { oldpassword, newpassword } = req.body;
    console.log({ oldpassword, newpassword });
    if (!oldpassword || !newpassword) {
      return res.status.send({
        success: false,
        message: "Please Provide old or new  Password",
      });
    }
    const isMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid old Password ",
      });
    }
    var salt = bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hash(newpassword, salt);
    user.password = hashpassword;
    await user.save();
    res.status(200).send({
      success: "true",
      message: "Password Update successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Does not update password internal server errror",
    });
  }
};

// Reset Password
const resetPasswordController = async (req, res) => {
  try {
    const { email, newpassword, answer } = req.body;
    if (!email || !newpassword || !answer) {
      return res.status(500).send({
        success: false,
        message: "Please fill All Detail",
      });
    }
    const user = await userModel.findOne({ email: email, answer: answer });
    if (!user) {
      return res.stats(404).send({
        success: "false",
        message: "User Not Found or invalid User",
      });
    }
    var salt = bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hash(newpassword, salt);
    user.password = hashpassword;

    await user.save();
    res.status(200).send({
      success: false,
      message: "Reset Data Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete User Data 
const deleteProfileController = async (req, res) => {
  try {
    const data = req.params.id;
    await userModel.findByIdAndDelete(data);
    return res.status(200).send({
      success: true,
      message: "Yes Delete Date Successfully",
    });
  } 
  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  getUserController,
  updateController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
};
