import React, { useState } from "react";

function CardWeather({data}){
   const [degrees, getDegrees] = useState(1)
   const degreesDic = {
      "1": [data?.main.temp, "°K"],
      "2": [(data?.main.temp-273.15).toFixed(2), "°C"],
      "3": [((data?.main.temp-273.15) * 9/5 + 32).toFixed(2), "°F"]
   }
  
   return(
      <div className="weather">
         <h3>{`${data?.name}, ${data?.sys.country}`}</h3>
         <div className="weather_state">
            <img onClick={()=> getDegrees(degrees == 3 ? 1 : degrees+1)} src={`https://openweathermap.org/img/wn/${data ? data.weather[0].icon : "01d"}@2x.png`} alt="" />
            <div className="state_temp">
               <p>{degreesDic[degrees][0]}</p>
               <span>{degreesDic[degrees][1]}</span>
            </div>
         </div>
    
         <div className="data">
            <div className="data_title">{data ? data.weather[0].description.replace(data.weather[0].description[0], data.weather[0].description[0].toUpperCase()) : ""}</div>
            <div className="data_component"><p><i className="bi bi-clouds"></i> Cluds:</p> <span>{data?.clouds.all} %</span></div>
            <div className="data_component"><p><i className="bi bi-wind"></i> Wind speed:</p> <span>{data?.wind.speed} m/s</span></div>
            <div className="data_component"><p><i className="bi bi-thermometer-high"></i> Pressure:</p> <span>{data?.main.pressure} mb</span></div>
         </div>
      </div>
   )
}

export default CardWeather