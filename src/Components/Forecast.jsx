import React from 'react'


export default function Forecast(props) { 
 
 

  return (
    <>
        <div className='forecast'>
          <h4><p>{props.title}</p></h4>
          <p>{props.temp.toFixed()} °C</p>
          <img src={props.icon} alt="" />
        </div>
     

    </>
  )
}
