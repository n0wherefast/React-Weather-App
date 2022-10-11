import { Search } from "./Components/Search";
// import { Bg } from "./Components/Bg";
import { Card } from "./Components/Card";
import { useState,useEffect } from "react";
import Geolocation from "./Components/Geolocation";
import axios from "axios";

function App() {
  const [data, setData] = useState("");  
  const [cityData,setCityData] =useState()
  const [forecast, setForecast] = useState("");

 const pull_data = (data) => { // request data from child to parent
    setCityData(data) 
    
  }
  const apiForecast =`http://api.openweathermap.org/data/2.5/forecast?q=${cityData}&appid=d7f2302909be07e4e4066c32537729f5`;

const loadForecast = () => {
  axios.get(apiForecast).then((response) => {
       setForecast(response.data);
       console.log(response.data);
  });
};

useEffect(() => {
  loadForecast()
}, [cityData]);
 
  return (
    <div className="App">
      
 <Search 
 pull={pull_data} />  


 <Card
   city={data.name}
   temp={data.main ? data.main.temp.toFixed() : null}
   weather={data.weather ? data.weather[0].main: null}
   humidity={data.main ? data.main.humidity: null}
   feels={data.main ? data.main.feels_like.toFixed(): null}
   wind={data.wind ? data.wind.speed : null}
   pressure={data.main ? data.main.pressure: null}
 />
  

    </div>
  );
}

export default App;
