import React from 'react'


export default function Forecast(props) { 
 

    // const [forecast, setForecast] = useState('');
    // const [city, setCity] = useState({q:'Roma'});  
    // const [units,setUnitus] = useState("metric");
    // const [daily,setDaily] = useState('');
    // const [hourly,sethourly] = useState('');

    // const id = forecast ? forecast.list[0].weather[0].icon: null;
    // const iconInfo =`http://openweathermap.org/img/wn/${id}@2x.png`;

   


  

  return (
    <>
        <div className='forecast' style={{ fontSize:'15px',border:'1px solid white',margin:'1em',padding:'1em'}}>
          <p>{props.title}</p>
          <p>{props.temp.toFixed()} °C</p>
          <img src={props.icon} alt="" />
        </div>
     

    </>
  )
}
