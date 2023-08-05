import { useState, useEffect } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

let color = "#FF5733"
function App() {
   const [weather, getWeather] = useState(null), cluds = weather?.clouds.all || 10
   // weather?.clouds.all || 10
   if(cluds <= 20){
      color = "#EF6D00"
   }else if(cluds >= 20 && cluds < 40){
      color = "#E9BF01"
   }else if(cluds >= 40 && cluds < 60){
      color = "#0DC0E8"
   }else if(cluds >= 60 && cluds < 80){
      color = "#09C290"
   }else if(cluds >= 80){
      color = "#0538D5"
   }

   // Le doy el color al body por que en movil al mover la pantalla se mira los bordes blancos si solo le doy color al app
   document.body.style.backgroundColor = color
   
   useEffect(()=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=44df1c19a531744261c9018e2290fe06`).then(prom=> prom.json()).then(res=> getWeather(res))
      },(error)=> console.log(error))
   }, [])

  // console.log(weather)

   return (
      <div className="App">
         <CardWeather data={weather} />
      </div>
   )
}

export default App
