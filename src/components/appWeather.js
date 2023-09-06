import WeatherMainInfo from "./WeatherMainInfo";
import WeatherForm from "./weatherForm";

import { useEffect, useState } from "react";


import styles from './weatherApp.module.css';






export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  console.log({ styles });

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
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleOnChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}
