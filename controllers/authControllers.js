const userModel = require("../models/userModel");
const bcrypt=require('bcryptjs')
const JWT = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address,answer } = req.body;
    // validate if user fill the data
    if (!username || !email || !password || !phone || !address ||!answer) {
      return res.status(500).send({
        success: false,
        message: "please provide all field",
      });
    }
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Already exist emial",
      });
    }
    // hash password
    var salt=bcrypt.genSaltSync(10)
    const hashpassword=await bcrypt.hash(password,salt)
    const user = await userModel.create({
      username,
      email,
      password:hashpassword,
      address,
      phone,
      answer,
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in register Api",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).send({
        success: false,
        message: "please provide email and password",
      });
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user Not found",
      });
    }
    const ismatch=await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(500).send({
            success:false,
            message:"Invalid password"
        })
    }
    // token 

    const token=JWT.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:'2d',
    })
    res.status(200).send({
      success: true,
      message: "Login Success",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internaal error",
      error,
    });
  }
};
module.exports = { registerController, loginController };
