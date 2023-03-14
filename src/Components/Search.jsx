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
               <nav className=" bg-gradient-to-r from-indigo-800 to-blue-800 flex flex-col items-center justify-center "  > 
               
                    <div className="p-2">
                         <div className="text-3xl font-extrabold text-slate-300 p-1 pl-5 ">
                              <h1 className=""> Weather App  </h1>
                    </div>
                

                         <form className="flex gap-2 m-1" role="search">
                              <InputField
                                  className = {'rounded-2xl p-2 pl-2'}
                                  value={search}
                                  onChange={onChange}/>

                              <Button
                               className = {'rounded-2xl bg-slate-700 p-2 text-slate-200'}
                                click={handleSubmit}
                              />
                                <GeoButton 
                                   click={handleGeoClick}
                                   className = {'bg-slate-700 rounded-2xl p-2'}
                                />
                         </form>
                            
                         </div>
                         <Geolocation 
                         pullGeoData={pullGeoData}
                         />

               <div className='bg-gradient-to-r from-blue-800 to-cyan-600 rounded-2xl p-2 flex flex-col gap-2 justify-center items-center text-2x text-slate-300 shadow-2xl'>
                         {formatToLocalTime(weather.dt,weather.timezone)} 
                </div>
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
               
                {weather &&
               <TimeAndLoacation
               className={' text-slate-300 flex items-center justify-center  flex-wrap mb-2 gap-2'} 
               weather={formatToLocalTime(weather.dt,weather.timezone)} 
               sunrise={formatToLocalTime(weather.sunrise,weather.timezone,'hh:mm a')}
               sunset={formatToLocalTime(weather.sunset,weather.timezone,'hh:mm a')}
              
               />} 
            
      </nav>
               
               


                
          </>
     );
};
