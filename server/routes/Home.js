// import express from "express";
// import mongoose from "mongoose";
// import reportdetails from "../models/userReport.js";
// import commonReport from "../models/commonReport.js";
const express = require("express");
const mongoose =  require("mongoose");
const reportdetails = require("../models/userReport.js");
const commonReport= require("../models/commonReport.js");
const router= express.Router();
router.get("/", (req,res)=>{
    try {
        commonReport.find({},(err,user)=>{
            if(err || !user.length) {
                // console.log(err) 
                res.status(500).json({message: "No report exist with requested cmdtyID"})
            }
            else {
                let data=user;
                data.map((users)=>{
                    const maxp=users.TotalMaxPrice;
                    const minp = users.TotalMinPrice;
                    users.minPrice=minp.reduce((a,b)=> {return a+b;},0)/minp.length;
                    users.maxPrice=maxp.reduce((a,b)=> {return a+b;},0)/maxp.length;
                    users.TotalMaxPrice=undefined;
                    users.TotalMinPrice=undefined;
                    users.__v=undefined;
                });
                res.status(200).json({data});
               
            }
        })
    } catch (error) {
        res.status(500).json({message: error});
    }
   
      

    
})
// export default router;
module.exports = router;