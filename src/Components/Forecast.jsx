import React from 'react'


export default function Forecast(props) { 
 
 

  return (
    <>
        <div className='forecast'>
          <p>{props.title}</p>
          <p>{props.temp.toFixed()} °C</p>
          <img src={props.icon} alt="" />
        </div>
     

    </>
  )
}
