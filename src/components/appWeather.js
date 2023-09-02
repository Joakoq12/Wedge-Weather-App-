import WeatherMainInfo from "./WeatherMainInfo";
import WeatherForm from "./weatherForm";

import { useEffect, useState } from "react";






export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  }, 
  
  []);


  useEffect(() => {
    document.title = "Weather | " + weather?.location?.name ?? "Ciudad no encontrada";


  }, [weather])

  async function loadInfo(city = "Barcelona") {


    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );


      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleOnChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}
