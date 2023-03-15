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
   let check = weather.temp > 30 ? " bg-auto animate-pulse-short bg-[url('https://images.pexels.com/photos/841343/pexels-photo-841343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  " 
    : "bg-auto animate-pulse-short   bg-[url('https://images.pexels.com/photos/2090646/pexels-photo-2090646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"  
   return check
 } 


  return (

    <div className={''}>
        <div id="SEARCH" className={changeBackground()}>
                <Search 
                 pull={pull_data}/> 
        </div>      


        <div className= {`${changeBackground()} bg-cover  flex flex-col items-center `}>

       <div className= {` flex flex-col items-center `}>
         <p className=" text-slate-900 text-4xl p-3">Hourly | {weather.name},{weather.country}</p>  
         <div className=" flex flex-wrap  items-center justify-center ">
              {hourly &&
                        hourly.map((item,index)=>(
                        <Forecast
                        className = {`${changeBackground()} text-lg  backdrop-blur-2xl shadow-xl rounded-2xl m-2 p-2 flex flex-col items-center justify-center`}
                        key={index}
                        title={item.title}
                        temp={item.temp}
                        icon={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        />
                        )) } 
            </div>                     
        </div>

        <div className="flex flex-col items-center " >
              <p className=" text-slate-900 text-4xl p-3">Daily | {weather.name},{weather.country}</p>
              <div className=" flex flex-wrap  items-center justify-center ">
                  {daily &&
                                daily.map((item,index)=>(
                                <Forecast
                                className = {` ${changeBackground()} text-lg backdrop-blur-2xl shadow-xl rounded-2xl m-2 p-2 flex flex-col items-center justify-center`}
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
