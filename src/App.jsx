import { Search } from "./Components/Search";
import Forecast from "./Components/Forecast";
import { useState } from "react";


function App() {
  const [weather, setWeather] = useState(""); 
  const [daily, setDaily] = useState("");
  const [hourly, setHourly] = useState("");  
 

 const pull_data = (data,daily,hourly) => {                   // Pull Weather data fetched inside child component(Search) to parent 
    setWeather(data)
    setDaily(daily)
    setHourly(hourly)
  }

 

 const changeBackground =()=>{
      if(weather.temp >= 30 ){
        return "linear-gradient(to right, #3c1e00, #ff4000"                       // change background based on temperature
      }else { return "linear-gradient(to right, #0575E6, #021B79)"}
 } 




  return (
    <div className="bg-slate-400">
        <div id="SEARCH" className="">
                <Search 
                 pull={pull_data}/> 
        </div>      


 <div className="flex">


       <div className="forecast-container" style={{background:`${changeBackground()}`}} >
         <p className="forcast-nameLocation">Hourly | {weather.name},{weather.country}</p>
         
         <div className="forecast-sec">
              
              {hourly &&
                        hourly.map((item,index)=>(
                        <Forecast
                        key={index}
                        title={item.title}
                        temp={item.temp}
                        icon={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        />
                        )) } </div>
                     
        </div>

      <div className="forecast-container" style={{background:`${changeBackground()}`}} >

      <p className="forcast-nameLocation">Daily | {weather.name},{weather.country}</p>

         <div className="forecast-sec">
          {daily &&
                        daily.map((item,index)=>(
                        <Forecast
                        key={index}
                        title={item.title}
                        temp={item.temp}
                        icon={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        
                        />
                        )) } 
         </div>
                     
        </div>


        
 </div>


    </div>
  );
}

export default App;
