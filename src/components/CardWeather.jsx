import React, { useState } from "react";

function CardWeather({data}){
   const [loaded, updateLoaded] = useState(true)
   setTimeout(()=> updateLoaded(false), 6*60000)
   const [degrees, getDegrees] = useState(1)
   const degreesDic = {
      "1": [data?.main.temp, "°K"],
      "2": [(data?.main.temp-273.15).toFixed(2), "°C"],
      "3": [((data?.main.temp-273.15) * 9/5 + 32).toFixed(2), "°F"]
   }
  
   if(loaded && !data){
      return (
         <div className="loaded">
            <div className="rain">
               <img src="./public/cloud.png" alt="" />
               <div className="drops">
                  <div className="drops_cont cont1">
                     <span className="drop1" style={{"--i": "2s"}}></span>
                     <span className="drop1" style={{"--i": "1.6s"}}></span>
                     <span className="drop1" style={{"--i": "1.3s"}}></span>
                     <span className="drop1" style={{"--i": "2.4s"}}></span>
                     <span className="drop1" style={{"--i": "1.5s"}}></span>
                     <span className="drop1" style={{"--i": "1.2s"}}></span>
                     <span className="drop1" style={{"--i": "2s"}}></span>
                     <span className="drop1" style={{"--i": "2.3s"}}></span>
                  </div>
                  
                  <div className="drops_cont cont2">
                     <span className="drop2" style={{"--i": "2.4s"}}></span>
                     <span className="drop2" style={{"--i": "1.7s"}}></span>
                     <span className="drop2" style={{"--i": "2.6s"}}></span>
                     <span className="drop2" style={{"--i": "1.2s"}}></span>
                     <span className="drop2" style={{"--i": "1.3s"}}></span>
                     <span className="drop2" style={{"--i": "1.4s"}}></span>
                     <span className="drop2" style={{"--i": "2.2s"}}></span>
                     <span className="drop2" style={{"--i": "2.1s"}}></span>
                  </div>
                  
                  <div className="drops_cont cont3">
                     <span className="drop1" style={{"--i": "1.8s"}}></span>
                     <span className="drop1" style={{"--i": "2.3s"}}></span>
                     <span className="drop1" style={{"--i": "1.5s"}}></span>
                     <span className="drop1" style={{"--i": "2.7s"}}></span>
                     <span className="drop1" style={{"--i": "1.9s"}}></span>
                     <span className="drop1" style={{"--i": "2.5s"}}></span>
                     <span className="drop1" style={{"--i": "1.1s"}}></span>
                     <span className="drop1" style={{"--i": "2.9s"}}></span>
                  </div>
               </div>
            </div>
         </div>
      )
   }else return(
      <div className="weather">
         <h3>{`${data?.name}, ${data?.sys.country}`}</h3>
         <div className="weather_state">
            <img onClick={()=> getDegrees(degrees == 3 ? 1 : degrees+1)} src={`https://openweathermap.org/img/wn/${data ? data.weather[0].icon : "01d"}@4x.png`} alt="" />
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