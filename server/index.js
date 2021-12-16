
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const report = require("./routes/reports.js");
const home = require("./routes/Home.js")
dotenv.config();
const app=express();
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
//place your mongoDB connection String 
const mongoURL="mongodb://localhost:27017/marketapi";
mongoose.connect(mongoURL,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
        console.log("conneted to mongo successfully");
    });

app.use(cors());
app.use("/",home);
//using /reports 
app.use("/reports",report);
const port = process.env.PORT||5000;
//connect to Desired port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
module.exports = app;

