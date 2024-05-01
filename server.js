const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const db=require('./config/db')



// dotenv config
dotenv.config()


//reset Object 
const app = express();

// middleware

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
// URl http://localhost:3000
app.use('/api/v1/test',require('./routes/textRoutes'))
app.use('/api/v1/auth',require('./routes/authRoutes'))
app.use('/api/v1/user',require('./routes/userRouter'))

app.use('/api/v1/restaurent',require('./routes/restaurentRoutes'))
app.use('/api/v1/category',require('./routes/categoryRoutes'))
app.use('/api/v1/food',require('./routes/foodRoute'))
app.use('/api/v1/order',require('./routes/orderRoutes'))



app.get('/',(req,res)=>{
    res.status(200).send("<h1>HEllo</h1>")
})

const PORT=process.env.PORT ||8080

app.listen(PORT, () => {
  console.log(`This app is listen on port http://localhost:${PORT}`.bgGreen.bold);
});


// npm run server