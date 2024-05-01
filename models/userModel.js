const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    usertype: {
      type: String,
      default: "client",
      required: [true, "user type is required"],
      enum: ["client", "admin", "vender", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://imgs.search.brave.com/r-A9XXGqvS9MRmGeRKEXn2U_m-UUJXHIcnvnCS-HgZc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ni8wMS8wOS8wMC9h/ZHdvcmRzLTc5MzAz/NF82NDAuanBn",
    },
    answer:{
      type:String,
      required:[true,'Answer is Required']
    }
  },
  { timestamps: true }
);

// exports
module.exports = mongoose.model("user", userSchema);
