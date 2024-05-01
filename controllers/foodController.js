const foodModel = require("../models/foodmodel");

const CreateFoodController = async (req, res) => {
  try {
    const {
      title,
      discription,
      price,
      imageurl,
      foodtags,
      Category,
      code,
      isAvailable,
      restaurent,
      rating,
      ratingCount,
    } = req.body;
    if (!title || !discription || !price) {
      return res.status(401).send({
        success: false,
        message: "Provide title discription and price",
      });
    }
    const newfoodModel = new foodModel({
      title,
      discription,
      price,
      imageurl,
      foodtags,
      Category,
      code,
      isAvailable,
      restaurent,
      rating,
      ratingCount,
    });
    await newfoodModel.save();
    res.status(200).send({
      success: true,
      message: "Create Food successfully",
      newfoodModel,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Internal Does not connect CreateFood Controoler",
    });
  }
};

const getFoodController = async (req, res) => {
  try {
    const food = await foodModel.find({});
    if (!food) {
      return res.status(401).send({
        success: false,
        message: "Does not have food Data",
      });
    }
    res.status(200).send({
      success: true,
      message: "Fetch Data Successfully",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server error  Does't connect to Get FoodController",
    });
  }
};
const getSingleFoodController = async (req, res) => {
  try {
    const foodid = req.params.id;
    if (!foodid) {
      res.status(404).send({
        success: false,
        message: "Food Not found",
      });
    }
    const food = await foodModel.findById(foodid);
    res.status(200).send({
      success: true,
      message: "Fetch Single Data Successfully",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server error  Does't connect to Get FoodController",
    });
  }
};

const getFoodByRestaurent = async (req, res) => {
  try {
    const restaurentid = req.params.id;
    if (!restaurentid) {
      return res.status(404).send({
        success: false,
        message: "Please provide ID of the restaurant.",
      });
    }

    // Find food items associated with the given restaurant ID
    const food = await foodModel.find({ restaurent: restaurentid });

    if (!food || food.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Food items not available for this restaurant.",
      });
    }

    res.status(200).send({
      success: true,
      message: "Data fetched successfully for the restaurant.",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message:
        "Internal Server Error: Failed to retrieve food data for the restaurant.",
    });
  }
};

const updateFoodController = async (req, res) => {
  try {
    const foodid = req.params.id;
    if (!foodid) {
      res.status(404).send({
        success: "false",
        message: "Does not Have Id ",
      });
    }
    const food = await foodModel.findById(foodid);
    if (!food) {
      res.status(404).send({
        success: false,
        message: "Not Available",
      });
    }
    const {
      title,
      discription,
      price,
      imageurl,
      foodtags,
      Category,
      code,
      isAvailable,
      restaurent,
      rating,
      ratingCount,
    } = req.body;
    const upatedData = await foodModel.findByIdAndUpdate(
      foodid,
      {
        title,
        discription,
        price,
        imageurl,
        foodtags,
        Category,
        code,
        isAvailable,
        restaurent,
        rating,
        ratingCount,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,

      message: "Success Data ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const deleteFoodController=async(req,res)=>{
    try {
        const restaurentid=req.params.id
        if(!restaurentid){
            return res.status(400).send({
                success:false,
                message:" provide id"
            })
        }
        const food=await foodModel.findById(restaurentid)
        if(!food){
            return res.status(404).send({
                success:false,
                message:"Does not have Data"
            })
        }
        await foodModel.findByIdAndDelete(restaurentid)
        res.status(200).send({
            success:false,
            message:"Successful Delete Food Data",
            food
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            messsage:"Internal Server Error Can't connect to Delete Food"
        })
    }
}
module.exports = {
  CreateFoodController,
  getFoodController,
  getSingleFoodController,
  getFoodByRestaurent,
  updateFoodController,deleteFoodController,
};
