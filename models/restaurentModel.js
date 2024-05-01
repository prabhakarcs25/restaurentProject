const mongoose = require("mongoose");

const restaurentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"], // Corrected 'require' to 'required'
    },
    imageurl: {
      type: String,
    },
    foods: {
      type: Array,
    },
    time: {
      type: String, // Added 'type' before 'String'
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isopen: {
      type: Boolean,
      default: true,
    },
    logourl: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingcount: {
      type: String,
    },
    code: {
      type: String,
    },
    coords: {
      id: { type: String },
      latitude: { type: Number },
      latitudedelta: { type: Number },
      longitude: { type: Number },
      longitudedelta: { type: Number },
      address: { type: String },
    },
  },
  { timestamps: true }
);

// Corrected the export statement
module.exports = mongoose.model("Restaurant", restaurentSchema);
