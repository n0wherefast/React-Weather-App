import { Search } from "./Components/Search";
// import { Bg } from "./Components/Bg";
// import  Card from "./Components/Card";
import Forecast from "./Components/Forecast";
import { useState,useEffect } from "react";
import TimeAndLoacation from "./Components/TimeAndLoacation";
import getFormatWeatherData from "./services/weatherService";


function App() {
  const [data, setData] = useState("");  
 
  const fetchWether = async () =>{
     const data = await getFormatWeatherData( { q: "london"});
     console.log(data)
  }
  fetchWether()

 const pull_data = (data) => { // request data from child to parent
    setData(data) 
     
  }
 



// useEffect(() => {
  
// }, [cityData]);
 
  return (
    <div className="App">
      
      
 <Search 
 pull={pull_data}/>  

{data?<Forecast
cityName={data}/>:null }


 {/* <Card
   city={data.name}
   temp={data.main ? data.main.temp.toFixed() : null}
   weather={data.weather ? data.weather[0].main: null}
   humidity={data.main ? data.main.humidity: null}
   feels={data.main ? data.main.feels_like.toFixed(): null}
   wind={data.wind ? data.wind.speed : null}
   pressure={data.main ? data.main.pressure: null}
 /> */}
  

    </div>
  );
}

export default App;
