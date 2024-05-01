const categorymodel = require("../models/categorymodel");

const createCategoryController = async (req, res) => {
  try {
    const { title, imageurl } = req.body;

    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Provide Title ",
      });
    }
    const newCategory = new categorymodel({ title, imageurl });
    await newCategory.save();
    res.status(200).send({
      success: true,
      message: " Category Create Successfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status.send({
      success: false,
      message: "Does not connect Create Category API",
    });
  }
};

const getAllCategoryController = async (req, res) => {
  try {
    const category = await categorymodel.find({});
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Does Not have Category",
      });
    }
    res.status(200).send({
      success: "false",
      message: "this view all category",
      category,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "INternal server does not connect to getall controler",
    });
  }
};

const updateCategoryControl = async (req, res) => {
  try {
    const { id } = req.params; // Remove the extra .id
    const { title, imageurl } = req.body;
    const category = await categorymodel.findByIdAndUpdate(
      id,
      { title, imageurl },
      { new: true }
    ); // Use destructuring for title and imageurl
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found", // Corrected message for clarity
      });
    }
    res.status(200).send({
      success: true,
      message: "Category updated successfully", // Corrected success message
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false, // Removed quotation marks
      message: "Internal Server Error", // Corrected message
    });
  }
};
const deleteCategoryController = async (req, res) => {
  try {
    const { categoryid } = req.params;
    if (!categoryid) {
      return res.status(401).send({
        success: false,
        message: "Does't match with Category data",
      });
    }
    const category =await  categorymodel.findById(categoryid);
    if (!category) {
      return res.status(500).send({
        success: false,
        message: "does not have cotegory",
      });
    }
    await categorymodel.findByIdAndDelete(categoryid)
    res.status(200).send({
      success: true,
      message: "Category Delete Date Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message:
        "Intenal Server Error or does not connect to category delete Api ",
    });
  }
};
module.exports = {
  createCategoryController,
  getAllCategoryController,
  updateCategoryControl,
  deleteCategoryController,
};
