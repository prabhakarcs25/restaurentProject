const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title:{
        type:String,
        require:[true,"Title is Required"]
    },
    imageurl:{
        type:String,
        default:"https://imgs.search.brave.com/Qd5vUtyvIp4923LGlvqLJJwaJewqn0IwzfVid1R_DFM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2Lzkz/L2RlL2E2OTNkZWVi/M2M4MDlhMDc4NmU5/OGI3ZjE5NDIxODI5/LmpwZw"
    }
  },
  { timestamps: true }
);

// exports
module.exports = mongoose.model("Category", categorySchema);
