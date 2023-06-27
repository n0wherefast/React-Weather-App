import React from 'react'


export default function Forecast(props) { 
  const {title,icon,temp,className,classNameTemp,classNameDay} = props

  return (
    <>
        <div className= {className}>
          <h4><p className={classNameDay}>{title}</p></h4>
          <div className='text-3xl'>|</div>
          <p className={classNameTemp}>{temp.toFixed()} °C</p>
          <div className='text-3xl'>|</div>
          <img src={icon} alt="" />
        </div>
    </>
  )
}
