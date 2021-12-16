// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const common = Schema({
   
        "cmdtyName" : String,
        "cmdtyID": String,
        "marketID": String,
        "marketName": String,
        "users": [String],
        "priceUnit": {
            type: String,
            default: "Kg",
        },
        "minPrice": Number,
        "maxPrice": Number,
        "TotalMinPrice": {
            type: [Number],
            Select: false},
        "TotalMaxPrice": {
            type: [Number],
            Select: false}

        }
    );
const commonReport=mongoose.model('commonReport',common);
// export default commonReport;
module.exports=commonReport;