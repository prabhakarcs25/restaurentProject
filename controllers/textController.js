const textUserController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "test user Data API",
    });
  } catch (error) {
    res.status(500).send({ error: "Internal server Error" });
    console.log("Internal Server Error");
  }
};

module.exports = { textUserController };
