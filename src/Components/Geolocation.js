import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';


export default function Geolocation() {

  const [geoData,setGeoData] = useState();
   

    navigator.geolocation.getCurrentPosition(async function (position) {
        let lati = position.coords.latitude;
        let long = position.coords.longitude;
        let GeoApi = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${long}&limit=&appid=d7f2302909be07e4e4066c32537729f5`
    
        axios.get(GeoApi).then((response) => {
            setGeoData(response.data);
            console.log(response.data ) ;
       });

    })

  return (
    <div>geolocation</div>
  )
}

