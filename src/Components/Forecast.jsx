import React from 'react'


export default function Forecast(props) { 
  const {title,icon,temp,className} = props

  return (
    <>
        <div className= {className}>
          <h4><p>{title}</p></h4>
          <p>{temp.toFixed()} °C</p>
          <img src={icon} alt="" />
        </div>
     

    </>
  )
}
