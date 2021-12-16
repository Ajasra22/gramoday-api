import React from 'react'

export default function User(props) {
    return (
        
            <div class="card bg-secondary" key={props.key} style={{width: "25rem", color: "white"}}>
      
      <div class="card-body">
         
          <p class="card-text">
          <h5>ReportId: {props.id}</h5>
          <h5>CommodityID: {props.cmdtyID}</h5>
          <h5>MarketID: {props.marketID}</h5>
          <h5>CommodityName: {props.cmdtyName}</h5>
          <h5>MarketName: {props.marketName}</h5>
          <h5>PriceUnit: {props.priceUnit}</h5>
          <h5>Users: <br/>{props.users.map((e)=>{
            return <li>{e}</li>
          })}</h5>
          <h5>MinPrice: {props.minPrice}</h5>
          <h5>MaxPrice: {props.maxPrice}</h5>
          </p>
          </div>
      </div>
    
    )
    
      
}
