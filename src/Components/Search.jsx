// import icon from "../img/116.png";
import React, { useState, useEffect } from "react";
import { InputField,Button,GeoButton } from "./utils";
import { Geolocation } from "./Geolocation";
import TimeAndLoacation from "./TimeAndLoacation";
import {getFormatWeatherData,formatToLocalTime} from "../services/weatherService";
import Card from "./Card";
import Forecast from "./Forecast";



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
     const [hourly, setHourly] = useState();  

    
          
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
                    setHourly(data.hourly)
                    
               })         
            }
            fetchWeather()        
            
     }, [city, units]);

     const changeBackground =()=>{

          if(check < 5) return " bg-cover bg-no-repeat animate-ping-short bg-[url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  "

            return check > 30 ? " bg-cover bg-no-repeat animate-ping-short bg-[url('https://images.pexels.com/photos/841343/pexels-photo-841343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  "  : 
            "bg-cover animate-ping-short bg-[url('https://images.pexels.com/photos/2090646/pexels-photo-2090646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" 
      } 
     const changeBackgroundCard =()=>{
            return check > 30 ? " backdrop-blur-xl  "  : "backdrop-blur-xl bg-sky-400" 
      } 

   

     return (
          <>
          <nav className = {`max-w-full h-full flex flex-col items-center justify-start md:justify-start md:bg-cover `} > 
                <div className={`${changeBackground()} w-full md:m-1 md:p-0 m-1 py-2 rounded-3xl flex flex-col items-center `}>
                    <div className=" ">
                         <div className="text-6xl font-light text-slate-300 p-2 pl-5 md:text-8xl md:text-slate-100">
                              {/* <h1 className="md:text-5xl"> Weather App  </h1> */}
                         </div>
                

                         <form className="flex gap-2 m-2 md:p-9 md:gap-5 " role="search">
                              <InputField
                                  className = {'rounded-2xl p-2 pl-2  md:w-60'}
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
               className={' text-sm text-slate-300  flex items-center justify-center flex-wrap mb-1 gap-2'} 
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
               />
               }
               <div className= {` flex flex-col items-center w-full `}>
                {/* <p className=" text-slate-900 text-4xl p-3 backdrop-blur-xl shadow-2xl border border-slate-800 m-3 md:text-slate-100">Hourly | {weather.name},{weather.country}</p>   */}
                <div className="flex gap-1 items-center justify-center w-full p-2">
                      {hourly &&
                                hourly.map((item,index)=>(
                                <Forecast
                                classNameTemp = {'md:text-md text-xl font-bold '}
                                classNameDay = {'text-sm'}
                                className = {` text-white bg-sky-600 w-[4.3rem] h-[8rem] md:w-[6rem]  flex flex-col items-center justify-center md:p-4 md:m-4 md:text-slate-100 md:text-sm rounded-xl`}
                                key={index}
                                title={item.title}
                                temp={item.temp}
                                icon={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                />
                                )) } 
                    </div>                     
                </div>
          </div>             
      </nav>
               
               


                
          </>
     );
};
