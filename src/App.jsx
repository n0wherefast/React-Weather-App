import { Search } from "./Components/Search";
// import { Bg } from "./Components/Bg";
// import  Card from "./Components/Card";
import Forecast from "./Components/Forecast";
import { useState,useEffect } from "react";
import Card from "./Components/Card";

function App() {
  const [weather, setWeather] = useState(""); 
  const [daily, setDaily] = useState("");
  const [hourly, setHourly] = useState("");  
 

 const pull_data = (data,daily,hourly) => {                   // Pull Weather data fetched inside child component(Search) to parent 
    setWeather(data)
    setDaily(daily)
    setHourly(hourly)
  }

 console.log( weather.temp)

 const changeBackground =()=>{
  weather.temp > 16 ?  console.log('ok') : console.log('no');
 } 




  return (
    <div className={`App ${changeBackground()}`}>
        
 <Search 
 pull={pull_data}/>  

 <div className="container" style={{ display:'flex',flexDirection:'column'}}>


       <div  style={{display:'flex',flexDirection:'row',marginTop:'1em',borderTop:'1px solid white'}} >
         <h1>Hourly</h1>
                    {hourly &&
                        hourly.map((item,index)=>(
                        <Forecast
                        key={index}
                        title={item.title}
                        temp={item.temp}
                        icon={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        />
                        )) }  
        </div>

      <div  style={{display:'flex',flexDirection:'row',marginTop:'1em',borderTop:'1px solid white'}} >
         <h1>Daily</h1>
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
  );
}

export default App;
