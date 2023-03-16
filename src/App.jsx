import { Search } from "./Components/Search";
import Forecast from "./Components/Forecast";
import { useState } from "react";


function App() {
  const [weather, setWeather] = useState(""); 
  const [daily, setDaily] = useState("");
  const [hourly, setHourly] = useState("");  
  const check = weather?.temp 
 

 const pull_data = (data,daily,hourly) => {                   // Pull Weather data fetched inside child component(Search) to parent 
    setWeather(data)
    setDaily(daily)
    setHourly(hourly)
  }

 

 const changeBackground =()=>{
  if(check < 5) return " bg-auto animate-ping-short bg-[url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  "

   return check  > 30 ? " bg-auto animate-pulse-short bg-[url('https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  " 
    : "bg-auto animate-pulse-short bg-[url('https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] "  
  
 } 

return (
    
      <div className={`${changeBackground()} md:bg-cover md:bg-center md:flex md:flex-row md:justify-around md:h-[929px] md:items-center`}>

              <div id="SEARCH" className=''>
                      <Search 
                      pull={pull_data}/>  
              </div>      


            <div className= {`${changeBackground()} flex flex-col items-center bg-cover md:bg-none md:gap-20 `}>

              <div className= {` flex flex-col items-center `}>
                <p className=" text-slate-900 text-4xl p-3 backdrop-blur-xl shadow-2xl rounded-2xl md:text-slate-100">Hourly | {weather.name},{weather.country}</p>  
                <div className=" flex flex-wrap  items-center justify-center ">
                      {hourly &&
                                hourly.map((item,index)=>(
                                <Forecast
                                className = {`${changeBackground()} text-lg  md:bg-none md:backdrop-blur-2xl shadow-xl rounded-2xl m-2  flex flex-col items-center justify-center md:p-4 md:m-4 md:text-slate-100 md:text-2xl`}
                                key={index}
                                title={item.title}
                                temp={item.temp}
                                icon={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                />
                                )) } 
                    </div>                     
                </div>

              <div className="flex flex-col items-center " >
                    <p className=" text-slate-900 text-4xl backdrop-blur-xl shadow-2xl rounded-3xl p-3 md:text-slate-100">Daily | {weather.name},{weather.country}</p>
                    <div className=" flex flex-wrap  items-center justify-center ">
                        {daily &&
                                      daily.map((item,index)=>(
                                      <Forecast
                                      className = {` ${changeBackground()} text-lg md:bg-none backdrop-blur-2xl shadow-xl rounded-2xl m-2  flex flex-col items-center justify-center md:p-4 md:m-4 md:text-slate-100 md:text-2xl`}
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
