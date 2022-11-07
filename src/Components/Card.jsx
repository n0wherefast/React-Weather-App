import React from 'react'


function Card (props){
  
  return (
    <div className="info" style={{color:'white',}}>
     
    <div style={{marginLeft:'3em',marginRight:'2em',height:'-2em'}}>

    <p className='p-info'>{props.name} ,{props.country}</p> 
    <p className="temp">{props.temp?.toFixed()}°C</p>
    <h1><p>{props.weather}</p></h1>         
      <h5><p> Min {props.min.toFixed()}° :  Max {props.max.toFixed()}°</p></h5>                                                                
    </div>
    <div className='info2'> <h5 > 
         <p >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moisture" viewBox="0 0 16 16">
          <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
          </svg>&nbsp; {props.humidity} %
          </p>
         <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
          <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
          <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
          </svg>&nbsp;  {props.feelsLike?.toFixed()} °C
          </p>
         <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
          <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
          </svg> &nbsp;{props.wind} km/h 
          </p>
         
    </h5>  
     <div><img style={{position:'relative',bottom:'15px'}} src={props.icon} alt=""/></div>
    </div>
    
   
</div>


//     <div className="card mb-3 card-dark bg-dark" style={{maxWidth:"60vh",marginTop:"1rem",padding:"2vh",opacity:'0.9'  }}>
//   <div className="row g-0"style={{color:'white'}}>
//     <div className="col-md-4">
//       <h3>{props.date}</h3>
//       <h1 className="card-title">{props.city}</h1>
//         <h1><p className="card-text">{props.temp}°C</p></h1>
//        <h3><p className="card-text">{props.weather}</p></h3> 
//        <img src={props.icon} alt="" />
//     </div>
//     <div className="col-md-6">
      
//       <div className="card-body">
//         <h5>Details</h5>
//         <h6><p className="card-text">Humidity: {props.humidity}%</p>
//         <p className="card-text">Feels Like: {props.feels} °C</p>
//         <p className="card-text">Wind: {props.wind} Km/h</p>
//         <p className="card-text">Pressure: {props.pressure}HPa</p></h6>
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
  )
}
export default Card