import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const [value,setValue]=useState("");
    return (
        <div className='grid'>
        <section className="bg-dark text-light text-center p-5">
        <label htmlFor="commodityType" style={{fontSize: "3rem"}}>Enter cmdtyID</label>
        <br />
        <textarea cols="40" rows="1" onChange={(e)=> setValue(e.target.value)} placeholder='Enter cmdtyID ex- "cmdty-1 or cmdty-2"'>{value}</textarea>
        <br />
       <Link to="/reports" state={{cmdtyID: {value}}}><button type="button" class="btn btn-light">Submit</button></Link>
        </section>
      
     </div>
    )
}
