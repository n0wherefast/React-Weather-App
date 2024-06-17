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
    
      <div className={`  w-full h-screen p-2 gap-3 md:flex md:flex-row md:justify-around  md:items-center`}>

              <div id="SEARCH" className='md:w-full'>
                      <Search 
                      pull={pull_data}/>  
              </div>      


            <div className= {`flex flex-col md:flex-row  items-center bg-cover md:bg-none md:w-[90vw]  `}>

               <div className={`flex flex-col items-center p-2  rounded-xl md:${changeBackground()}`} >
                    <p className=" text-slate-900 text-6xl md:text-8xl font-black  p-3 m-2  md:text-slate-100">Daily</p>
                    <div className=" flex flex-wrap  items-center justify-center ">
                        {daily &&
                                      daily.map((item,index)=>(
                                      <Forecast
                                      classNameTemp = {'text-4xl md:text-sm  font-bold p-2'}
                                      classNameDay = {'text-3xl p-2'}
                                      className = {`text-white bg-sky-500 rounded-xl md:w-52 md:h-16 backdrop-blur-2xl w-80 lg:w-80 lg:h-28 h-28 text-xl md:bg-none shadow-xl shadow-slate-900  m-2  flex items-center justify-around md:p-4 md:m-4 md:text-slate-100 md:text-2xl`}
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
