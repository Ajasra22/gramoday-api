
const express = require("express");
const mongoose =  require("mongoose");
//Import Schemas
const reportdetails = require("../models/userReport.js");
const commonReport= require("../models/commonReport.js");
const router= express.Router();
// Post request /reports
router.post("/",async (req,res)=>{
    try {
        const report =new reportdetails({...req.body})
        report.reportDetails.minPrice=report.reportDetails.minPrice/report.reportDetails.convFctr;
        report.reportDetails.maxPrice=report.reportDetails.maxPrice/report.reportDetails.convFctr;
         const common=commonReport.findOneAndUpdate({'cmdtyID': report.reportDetails.cmdtyID ,'marketID': report.reportDetails.marketID},
            { 'cmdtyName': report.reportDetails.cmdtyName,
                'cmdtyID': report.reportDetails.cmdtyID , 'marketID': report.reportDetails.marketID ,
                'marketName': report.reportDetails.marketName,
            $push: { 'TotalMaxPrice': report.reportDetails.maxPrice ,'users' : report.reportDetails.userID ,'TotalMinPrice' : report.reportDetails.minPrice} },{upsert: true},(err,doc)=>{
                if(err) {
                    // console.log(err);
                    res.status(500).json({message: "Error occured while making a Post request"})
                }
                else {
                    //Send Success Status and Report Id after Successlfull Post request
                    // res.status(200).json({"Status": "Success", "reportID": doc._id });
                    // doc.save();
                    try {
                        res.status(200).json({"Status": "Success", "reportID": doc._id });
                        }
                catch (error) {
                    res.status(200).json({"Status": "Success" });
                             }
                    }
                    })
                    
            }
            catch (error) {
                // console.log(error.message);
                res.status(500).send("Error Occured");
            }
    }
);
// Get Request /reports ex- /reports?cmdtyID=cmdty-1
router.get("/", (req,res)=>{
    console.log("This is a get request");
    let cmid=req.query.cmdtyID;
    //console query
    console.log(req.query);
    try {
        commonReport.find({'cmdtyID': req.query.cmdtyID},(err,user)=>{
            if(err || !user.length) {
                // console.log(err) 
                // // Send error if error while finding query from database
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
                res.status(200).json(data);
               
            }
        })
    } catch (error) {
        // Send error if error while fetching
        res.status(500).json({message: error});
    }
   
      

    
})
// export default router;
module.exports = router;