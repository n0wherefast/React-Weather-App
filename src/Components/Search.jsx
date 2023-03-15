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
     const check = weather?.temp 
    
          
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

     const changeBackground =()=>{
            return check > 30 ? " bg-auto animate-ping-short bg-[url('https://images.pexels.com/photos/841343/pexels-photo-841343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  "  : 
            "bg-auto animate-ping-short bg-[url('https://images.pexels.com/photos/2090646/pexels-photo-2090646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" 
      } 
     const changeBackgroundCard =()=>{
            return check > 30 ? " backdrop-blur-xl"  : "backdrop-blur-xl" 
      } 

   

     return (
          <>
          <nav className = {`${changeBackground()}  flex flex-col items-center justify-center`} > 
               
                    <div className="p-2">
                         <div className="text-6xl font-light text-slate-300 p-2 pl-5 ">
                              <h1 className=""> Weather App  </h1>
                    </div>
                

                         <form className="flex gap-2 m-2" role="search">
                              <InputField
                                  className = {'rounded-2xl p-2 pl-2'}
                                  value={search}
                                  onChange={onChange}/>

                              <Button
                               className = {'rounded-2xl bg-slate-800 p-2 text-slate-200'}
                                click={handleSubmit}
                              />
                                <GeoButton 
                                   click={handleGeoClick}
                                   className = {'bg-slate-800 rounded-2xl p-2'}
                                />
                         </form>
                            
                         </div>
                         <Geolocation 
                         pullGeoData={pullGeoData}
                         />
                      {weather &&
               <TimeAndLoacation
               className={' text-slate-300  flex items-center justify-center flex-wrap mb-1 gap-2'} 
               weather={formatToLocalTime(weather.dt,weather.timezone)} 
               sunrise={formatToLocalTime(weather.sunrise,weather.timezone,'hh:mm a')}
               sunset={formatToLocalTime(weather.sunset,weather.timezone,'hh:mm a')}
               />} 
                         
                  {weather &&  
                  <Card
                  bg = {changeBackgroundCard()}
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
               
               


                
          </>
     );
};
