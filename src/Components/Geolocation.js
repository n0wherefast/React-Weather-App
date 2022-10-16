import React from 'react'
import { useState,useEffect } from 'react';

export  const Geolocation = (props) => {

  const [geoData,setGeoData] = useState()
  

      
       const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

        
              let geoApi = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=&appid=d7f2302909be07e4e4066c32537729f5`

        try {
            let response =  await fetch(geoApi,{mode:"cors"})
            let i = await response.json()
            setGeoData(i)
            

        } catch (error) {
            
        }
        });
     }
     useEffect(()=>{
        fetchData()
     },[])
    
     props.pullGeoData(geoData)   


  
}

   