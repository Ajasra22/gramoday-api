
// import supertest from "supertest";
// import { request } from "express";
// const {request}= require("express");
const request = require("supertest");
const app = require("./index.js");
const cmdtyID="cmdty-1"
describe("Post /reports", ()=>{
    describe("Give report of a Cmdty" ,()=>{
        test("should respond with a 200 status Code and Report Id", async ()=>{
            const res = await request(app).post("/reports").send({
                    "reportDetails" :{
                    "userID": "user-1",
                    "marketID": "market-2",
                    "marketName": "vashi Navi Mumbai",
                    "cmdtyID": "cmdty-3",
                    "marketType": "Mandi",
                    "cmdtyName": "Mango",
                    "priceUnit": "Pack",
                    "convFctr": 80,
                    "minPrice": 1200,
                    "maxPrice": 1600
                }
            })
            expect(res.statusCode).toBe(200);
        },50000)
       
    })
})
describe(`Get reports from /reports?cmdtyID=${cmdtyID}`,()=>{
    test("should respond with json file", async ()=>{
        const res = await request(app).get(`/reports?cmdtyID=${cmdtyID}`)
        expect(res.statusCode).toBe(200);
    })
})