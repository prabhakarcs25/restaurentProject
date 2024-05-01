const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    food: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    status:{
        type:String,
        enum:['preparing','prepaire','on the way','delevered'],
        default:"preparing"
    }
  },
  { timestamps: true }
);

// exports
module.exports = mongoose.model("Order", orderSchema);
