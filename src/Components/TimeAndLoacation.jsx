import React from 'react'

function TimeAndLoacation(props) {
  return (
    <div className=" TaL bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'center',  opacity: "0.9" ,color:'white',fontWeight:'lighter'}} >{props.weather} | Min {props.min.toFixed()}° : Max {props.max.toFixed()}°</div>
  )
}

export default TimeAndLoacation