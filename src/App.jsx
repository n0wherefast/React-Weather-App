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
    <div className="App " style={{}}>
        
 <Search 
 pull={pull_data}/>  

 <div className="container" style={{ background:`${changeBackground()}`}}>


       <div style={{display:'flex',flexDirection:'column',marginTop:'3em'}} >
         <h1 style={{borderBottom:'1px solid white',paddingBottom:'1em',color:'white'}}>Hourly</h1>
         <div style={{display:'flex',flexDirection:'row' ,flexWrap: "wrap",justifyContent:'center'}}>
              
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

      <div style={{display:'flex',flexDirection:'column',marginTop:'3em'}} >

         <h1 style={{borderBottom:'1px solid white',paddingBottom:'1em',color:'white'}}>Daily</h1>

         <div style={{display:'flex',flexDirection:'row',flexWrap: "wrap",justifyContent:'center'}}>
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
