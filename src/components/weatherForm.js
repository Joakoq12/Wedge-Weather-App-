import { useState } from "react";

export default function WeatherForm ({onChangeCity}) {

    const [city, setCity] = useState("");

    function HandleChange(e) {
        setCity(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        if (!city || city !== "London") {
          onChangeCity(city);
        }
      }



    return (
    
    <form onSubmit={handleSubmit}> 
        <input 
        type="text"
        value={city}
        onChange={HandleChange}
        >
        </input>
    </form>

);

}
