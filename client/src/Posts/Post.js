import * as api from "../api";
import User from "./User.js"
import React,{useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
 const Post= ()=>{
    const [post ,setPost] =  useState([]);
    const location= useLocation();
    const search = location.search;
    const name = new URLSearchParams(search).get('cmdtyID');
    try {
        const {cmdtyID}= location.state;
        name=cmdtyID.value;
    } catch (error) {
        console.log(error)
    } 

    console.log("Name: ",name)
    useEffect(()=>{
        try {
        const fetchpost =async ()=>{
          
             let url="/reports?cmdtyID=";
             if(name===null) console.log("Name is null");
             //Fetch data from Backend api
            const {data}= await api.fetchReport(`${url}${name}`);
            setPost(data);
           
        }
        fetchpost();
    }
             catch (error) {
                console.log(error)
              
        }
    },[name])
    const populatecards =(d,index)=>{
            return (
               <div className="d-flex  col-md-5">
                     <User key={index} cmdtyID={d.cmdtyID} 
                  marketID={d.marketID}
                  cmdtyName={d.cmdtyName}
                  id={d._id}
                  marketName={d.marketName}
                  priceUnit={d.priceUnit}
                  users={d.users}
                  minPrice={d.minPrice}
                  maxPrice={d.maxPrice} />
               </div>
                )
    }
    //If no post found 
       if(!post.length)
       {
         return (
             <section className="p-5 text-center">

             <h2>No Post Found with selected cmdtyID</h2>
             <h2>Try searching "/reports?cmdtyID=cmdty-1"</h2>
             </section>
         )
       }
       else
       { //If Post are found of specific query
           return(
            <div className="container">
            <div className="row p-3">
           
           {post.map(populatecards)}
          
           </div>
         </div>
           )
       
      
       }
         
           
    
}
export default Post