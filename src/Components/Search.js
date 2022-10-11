import icon from "../img/116.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";
import { InputField,Button } from "./utils";


export const Search = (props) => {
     const [search, setSearch] = useState("");
     const [data, setData] = useState("");
     const [forecast, setForecast] = useState("");
     const [city, setCity] = useState("");
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d7f2302909be07e4e4066c32537729f5`;
     const id = data.weather?data.weather[0].icon:null
     const iconInfo =`http://openweathermap.org/img/wn/${id}@2x.png`
     
     

     const onChange = (e) => {
          setSearch(e.target.value);
     };
     const handleSubmit = (e) => {
          e.preventDefault();
          loadApi();
          props.pull(search)
     };

     

     const loadApi = () => {
          axios.get(apiUrl).then((response) => {
               setData(response.data);
               console.log(response.data);
          });
     };

     useEffect(() => {
          setCity(search);
     }, [handleSubmit]);

     return (
          <>
               <nav className="navbar navbar-dark bg-dark" style={{ opacity: "0.9" }} > 
               
                    <div className="container-fluid">
                         <div className="navbar-brand">
                              <h1 ><img src={icon} alt="icon"/> Weather App  </h1>
                         </div>
                

                         <form className="input-group" role="search">
                              <InputField
                                  value={search}
                                  onChange={onChange}/>
                              <Button
                                click={handleSubmit}/>
                         </form>
                            
                    </div>
                    <div className="info" style={{color:'white',}}>
                    <h3>
                      <p>{data.name}</p>
                      <p className="temp">{data.main ? data.main.temp.toFixed() : null} °C</p>
                      <p>{data.weather ? data.weather[0].main: null} </p>                                                                     
                    </h3>
                     <h6> 
                        <p>Humidity:{data.main ? data.main.humidity: null} %</p>
                         <p>Feels Like:{data.main ? data.main.feels_like.toFixed(): null} °C</p>
                         <p>Wind:{data.wind ? data.wind.speed : null} %</p>
                         <p>Pressure: {data.main ? data.main.pressure: null} HPa</p>
                    </h6>  
                    <div><img src={iconInfo} alt="" /></div>                              
                   
            </div>
               </nav>
               <div className="container" style={{marginLeft:'0px', paddingLeft:'0px'}}>
              <div className="row g-0">
               
                    </div>
                    <div className="row g-0">
                       
                        
                    </div>
                   
                
               </div>
          </>
     );
};
