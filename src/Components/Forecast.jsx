import React from 'react'


export default function Forecast(props) { 
  const {title,icon,temp,className,classNameTemp,classNameDay} = props

  return (
    <>
        <div className= {className}>
          {/* <div className='text-sm'></div> */}
          
          {/* <div className='text-sm'></div> */}
          <img src={icon} alt="" />
          <p className={classNameTemp}>{temp.toFixed()} °C</p>
          <h4><p className={classNameDay}>{title}</p></h4>

        </div>
    </>
  )
}
