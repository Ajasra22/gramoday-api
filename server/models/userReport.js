// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportDetails = Schema({
    "reportDetails" :{
        "userID" : {
            type: String,
            required : true},
    
        "marketID":{
            type: String,
            required : true},
        "marketName": {
            type: String,
            required : true},
        "cmdtyID": {
            type: String,
            required: true
        },
        "marketType": {
            type: String,
            required: true
        },
        "cmdtyName": {
            type: String,
            required: true
        },
        "priceUnit": {
            type: String,
            required: true
        },
        "convFctr": {
            type: Number,
            default: 1,
            required: true
        },
        "minPrice": {
            type: Number,
            default: 0,
            required: true
        },
        "maxPrice": {
            type: Number,
            default: 0,
            required: true
        },
    }
    

});
const reportdetails=mongoose.model('reportDetail',reportDetails);
// export default reportdetails;
module.exports=reportdetails;