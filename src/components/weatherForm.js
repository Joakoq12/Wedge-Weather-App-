import { useState } from "react";

import styles from "./weatherApp.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function HandleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!city || city !== "") {
      onChangeCity(city);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={city}
        onChange={HandleChange}
      />
    </form>
  );
}
