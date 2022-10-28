import React from 'react'


export  const Geolocation = (props) => {



      
   
        
        navigator.geolocation.getCurrentPosition( (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            
            props.pullGeoData(lat,lon)   
       
     })

    
     
    
     
  
}

   