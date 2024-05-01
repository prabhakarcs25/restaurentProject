const restaurentModel = require("../models/restaurentModel");

const createRestaurentController = async (req, res) => {
  try {
    const {
      title,
      imageurl,
      foods,
      time,
      pickup,
      delivery,
      isopen,
      logourl,
      rating,
      ratingcount,
      code,
      coords,
    } = req.body;
    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please provide Title and Coords",
      });
    }
    const newRestaurent = new restaurentModel({
      title,
      imageurl,
      foods,
      time,
      pickup,
      delivery,
      isopen,
      logourl,
      rating,
      ratingcount,
      code,
      coords,
    });
    await newRestaurent.save();
    res.status(201).send({
      success: true,
      message: "New Restaurent Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error in create restaurent Api",
    });
  }
};

const getAllRestaurentController = async (req, res) => {
  try {
    const restaurents = await restaurentModel.find({});
    if (!restaurents) {
      return res.send(404).send({
        success: false,
        message: "Restaurent not Available",
      });
    }
    res.status(202).send({
      success: true,
      totalcount: restaurents.length,
      restaurents,
      message: "Restaurent are Available...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get Restaurent Controller By Id
const getRestaurentById = async (req, res) => {
  try {
      const restaurentid = req.params.id;
      const restaurent = await restaurentModel.findById(restaurentid);
    if (!restaurentid) {
      res.status(404).send({
        success: false,
        message: "restaurent Not Found",
      });
    }
    if (!restaurent) {
      return res.status.send({
        success: false,
        message: "Does not have Restaurent ",
      });
    }
    res.status(201).send({
      success: true,
      message: "Fetch Data successfully",
      restaurent,
    });
  } catch (error) {
    console.log(error);
    res.status.send({
      success: false,
      message: "Internal Server Error Does not connect to get resById",
    });
  }
};

const deleteRestaurentController=async(req,res)=>{
    try {
        const restaurentId=req.params.id
        if(!restaurentId){
            return res.status(404).send({
                success:"false",
                message:"Restaurent Not Availabe or wrong Restaurent id"
            })
        }
        const restaurent=await restaurentModel.findByIdAndDelete(restaurentId);
        res.status(200).send({
            success:true,
            message:"Restaurent delete Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Internal Server Error Does not connect to deleteRestaurentData"
        })
    }
}

module.exports = {
  createRestaurentController,
  getAllRestaurentController,
  getRestaurentById,
   deleteRestaurentController,
};
