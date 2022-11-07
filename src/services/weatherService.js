import { DateTime } from "luxon";

const API_KEY = "d7f2302909be07e4e4066c32537729f5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoApiType, searchParams) => {
     const url = new URL(BASE_URL + "/" + infoApiType);
     url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

     return fetch(url)
     .then((res) => res.json())  
};


const formatCurrentWeather = (data) =>{
      const{
        coord:{lat,lon},
        main:{temp, feels_like, temp_min, temp_max,pressure, humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed}
      } = data
      const{main:details,icon} = weather[0]

      return{lat,lon,temp,feels_like,temp_min,temp_max,pressure,humidity,
    name,dt,country,sunrise,sunset,details,icon,speed}
};

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly } = data;
    daily = daily.slice(1,6).map(d => {
        return{
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(d => {
        return{
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });
    return{timezone, daily, hourly}
};

const getFormatWeatherData = async (searchParams) =>{

    const formatCurrent = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

    const {lat, lon} = formatCurrent

    const formattedForecasttWeather = await getWeatherData('onecall',{
        lat,
        lon,
        exclude: "current,minutely,alerts,",
        units: searchParams.units,
    }).then(formatForecastWeather)


    return {...formatCurrent, ...formattedForecasttWeather}
}

const formatToLocalTime = (
    secs,
    zone,
    format ="cccc,dd LLL yyyy' | Local time : 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



export   {getFormatWeatherData ,formatToLocalTime }
