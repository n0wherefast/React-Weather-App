import React from 'react'
import { useState,useEffect } from 'react'
import  Card from "./Card";

import axios from 'axios';



export default function Forecast(props) { 
    const [forecast, setForecast] = useState("");
    let cityData= props.cityName
    const id = forecast ? forecast.list[0].weather[0].icon: null;
    const iconInfo =`http://openweathermap.org/img/wn/${id}@2x.png`;

const loadForecast = async () => {
        const apiForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${cityData}&units=metric&appid=d7f2302909be07e4e4066c32537729f5`;

    try {
        let response = await fetch(apiForecast,{mode:"cors"})
        let i = await response.json()
        let data = i
        setForecast(data)
        
    } catch (error) {
        
}
 };

useEffect(() => {
    loadForecast()
  }, []);
  console.log('setForecast',forecast)
  console.log(forecast ? forecast.list[0].main: null)

  return (
    <>
    <Card
    date={forecast? forecast.list[0].dt_txt :null}
   city={forecast? forecast.city.name:null}
   temp={forecast ? forecast.list[0].main.temp.toFixed() : null}
   weather={forecast ? forecast.list[0].weather[0].main: null}
   icon={iconInfo}

//    humidity={forecast.main ? forecast.main.humidity: null}
//    feels={forecast.main ? forecast.main.feels_like.toFixed(): null}
//    wind={forecast.wind ? forecast.wind.speed : null}
//    pressure={forecast.main ? forecast.main.pressure: null}
 />
    <div>{forecast? forecast.city.name:null}</div>
    </>
  )
}
