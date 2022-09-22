import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherDisplay(props) {
  let [name, setName] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function handleResults(response) {
    setName(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  let apiKey = "25499f9fd2b3b742a2a887d3d9745f66";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResults);
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  if (props.city === "") {
    return "";
  } else {
    return (
      <div className="weatherDisplay">
        <h2>{name}</h2>
        <div className="row">
          <ul className="displayList">
            <div col-3>{temperature} ℃</div>
            <div col-3>{description}</div>
            <div col-3>Humidity: {humidity} %</div>
            <div col-3>Wind: {wind} km/h</div>
          </ul>
        </div>
        <img src={iconUrl} alt="icon" />
      </div>
    );
  }
}
