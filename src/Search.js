import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="searchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search City" onChange={updateCity} />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h3>
        <WeatherDisplay city={result} />
      </h3>
    </div>
  );
}
