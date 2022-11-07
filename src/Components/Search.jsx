import icon from "../img/116.png";
import React, { useState, useEffect } from "react";
import { InputField,Button,GeoButton } from "./utils";
import { Geolocation } from "./Geolocation";
import TimeAndLoacation from "./TimeAndLoacation";
import {getFormatWeatherData,formatToLocalTime} from "../services/weatherService";
import Card from "./Card";



export const Search = ({pull}) => {

                                           
     const [search, setSearch] = useState("");                                                // from comes the  input 
     const [city, setCity] = useState({q:'Roma,IT'});                                         // here is stored  info  from Search Input 
     const [weather, setWeather] = useState(null);                                           //  where is stored the data from api
     const [units,/*setUnitus*/] = useState("metric");                                         
     const [lat, setLat] = useState("");
     const [lon, setLon] = useState("");
     const id = weather?.icon;
     const iconInfo =`http://openweathermap.org/img/wn/${id}@2x.png`;
     
     const pullGeoData = (lat,lon) =>{
          setLat(lat)
          setLon(lon)                                                                     //pull longitude,latitude data from weatherService module
     };

     const handleGeoClick =(e)=>{
          e.preventDefault();
          setCity({lat,lon})
         
     }
       

     const onChange = (e) => {
          setSearch(e.target.value);
     };


     const handleSubmit = (e) => {
          e.preventDefault();
          setCity({q: search}) 
          setSearch('')  
          
      };
      

     useEffect(() => {

          const fetchWeather = async () =>{
           await getFormatWeatherData({...city, units}).then((data)=>{
                    setWeather(data); 
                    pull(data, data.daily, data.hourly)
               })         
            }
            fetchWeather()        
            
     }, [city, units]);

   

     return (
          <>
               <nav className="navbar navbar-dark bg-dark"  > 
               
                    <div className="container-fluid">
                         <div className="navbar-brand">
                              <h1 ><img src={icon} alt="icon"/> Weather App  </h1>
                         </div>
                

                         <form className="input-group" role="search">
                              <InputField
                                  value={search}
                                 
                                  onChange={onChange}/>
                              <Button
                                click={handleSubmit}/>
                                <GeoButton click={handleGeoClick}/>
                         </form>
                            
                    </div>
                    <Geolocation 
                    pullGeoData={pullGeoData}
                    />
                  {weather &&  
                  <Card
                  name={weather.name}
                  country={weather.country}
                  temp={weather.temp}
                  weather={weather.details}
                  humidity={weather.humidity}
                  feelsLike={weather.feels_like}
                  wind={weather.speed}
                  pressure={weather.pressure}
                  icon={iconInfo}
                  min={weather.temp_min}
               max={weather.temp_max}                  
               />}
            
               </nav>
               
                {weather &&
               <TimeAndLoacation 
               weather={formatToLocalTime(weather.dt,weather.timezone)} 
               sunrise={formatToLocalTime(weather.sunrise,weather.timezone,'hh:mm a')}
               sunset={formatToLocalTime(weather.sunset,weather.timezone,'hh:mm a')}
              
               />} 


                
          </>
     );
};
