import React from 'react'
import icon from "../img/116.png";

export  const Card= (props) => {
  return (
    <div className="card mb-3 card-dark bg-dark" style={{maxWidth:"60vh",marginTop:"1rem",padding:"2vh",opacity:'0.9'  }}>
  <div className="row g-0"style={{color:'white'}}>
    <div className="col-md-4">
      <h1 className="card-title">{props.city}</h1>
        <h1><p className="card-text">{props.temp}°C</p></h1>
       <h3><p className="card-text">{props.weather}</p></h3> 
       <img src={icon} alt="" />
    </div>
    <div className="col-md-6">
      
      <div className="card-body">
        <h5>Details</h5>
        <h6><p className="card-text">Humidity: {props.humidity}%</p>
        <p className="card-text">Feels Like: {props.feels} °C</p>
        <p className="card-text">Wind: {props.wind} Km/h</p>
        <p className="card-text">Pressure: {props.pressure}HPa</p></h6>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}
