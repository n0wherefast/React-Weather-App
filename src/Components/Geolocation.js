import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import { useGeolocated } from "react-geolocated";

export  const Demo = () => {

  const [geoData,setGeoData] = useState()
  
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
      useGeolocated({
          positionOptions: {
              enableHighAccuracy: false,
          },
          userDecisionTimeout: 5000,
      });
         let lati = coords ? coords.latitude :null;
        let long = coords? coords.longitude:null;
      
      
      let GeoApi = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${long}&limit=&appid=d7f2302909be07e4e4066c32537729f5`
    
          axios.get(GeoApi).then((response) => {
              setGeoData(response.data);
              console.log(response.data[0].name ) ;
         });

  return !isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
  ) : coords ? (
      <table>
          <tbody>
              <tr>
                  <td>latitude</td>
                  <td>{coords.latitude}</td>
              </tr>
              <tr>
                  <td>longitude</td>
                  <td>{coords.longitude}</td>
              </tr>
            
          </tbody>
      </table>
  ) : (
      <div>Getting the location data&hellip; </div>
  );
};

    // navigator.geolocation.getCurrentPosition(async function (position) {
    //     let lati = position.coords.latitude;
    //     let long = position.coords.longitude;
    //     let GeoApi = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${long}&limit=&appid=d7f2302909be07e4e4066c32537729f5`
    
    //     axios.get(GeoApi).then((response) => {
    //         setGeoData(response.data);
    //         console.log(response.data ) ;
    //    });

    // })