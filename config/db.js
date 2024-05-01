const mongoose = require("mongoose");
require("dotenv").config();
// const colors=require('colors')
const mongo_URL = process.env.MONGODB_url;
mongoose.connect(mongo_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log(`connected database successfully ${mongoose.connection.host}`.bgGreen);
});
db.on("error", (err) => {
  console.log(`Error in database`.bgRed);
});
db.on("disconnected", () => {
  console.log(`disconnected Database successfully `);
});

module.exports = db;
