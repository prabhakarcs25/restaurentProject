const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require:[true,'title is required']
    },
    discription:{
        type:String,
        required:[true,'Discription Is Required']
    },
    price:{
        type:Number,
        required:[true,'Price Is Required']
    },
    imageurl:{
        type:String,
        default:"https://imgs.search.brave.com/Qd5vUtyvIp4923LGlvqLJJwaJewqn0IwzfVid1R_DFM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2Lzkz/L2RlL2E2OTNkZWVi/M2M4MDlhMDc4NmU5/OGI3ZjE5NDIxODI5/LmpwZw"
    },
    foodtags:{
        type:String,
    },
    Category:{
        type:String,
    },
    code:{
        type:String
    },
    isAvailable:{
        type :Boolean,
        default:true,
    },
    restaurent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant'
    },
    rating:{
        type: Number,
        default:5,
        min:1,
        max:5 
    },
    ratingCount:{
        type:String
    }
    
  },
  { timestamps: true }
);

// exports
module.exports = mongoose.model("Food", foodSchema);
