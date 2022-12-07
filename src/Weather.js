import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

// import MainSection from "./MainSection";

export default function Weather() {
  const [city, setCity] = useState("Kyiv");
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }

  function setDate() {
    let now = new Date();

    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    return (
      <ul>
        <li>
          {now.getDate()} {months[now.getMonth()]} {now.getFullYear()}
        </li>
        <li>
          {days[now.getDay()]} {now.getHours()}:{now.getMinutes()}
        </li>
      </ul>
    );
  }

  function getData(responce) {
    setWeatherData({
      temperature: Math.round(responce.data.temperature.current),
      windSpeed: Math.round(responce.data.wind.speed),
      hymidity: responce.data.temperature.humidity,
      description: responce.data.condition.description,
      iconCode: responce.data.condition.icon,
      time: setDate(responce.data.time),
      city: responce.data.city,
      country: responce.data.country,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
  }

  function showWeather() {
    setLoaded(true);

    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=60e7tc4c9f70d174aa0f4647b8bao3f3`;
    axios.get(apiUrl).then(getData);
  }

  const headerForm = (
    <div className="Header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city..."
          className="search-city-input"
          autoComplete="off"
          autoFocus="on"
          onChange={changeCity}
        />

        <input type="submit" value="Search" />
      </form>
    </div>
  );

  const mainSection = (
    <div className="Main">
      <div className="cityInfo">
        <h1>{weatherData.city}</h1>
        <div className="dateInfo">{weatherData.time}</div>
      </div>

      <div className="weatherDetails">
        <div className="leftPart">
          <div className="iconWrapper">
            <WeatherIcon iconCode={weatherData.iconCode} />
          </div>
          <div className="temperatureWrapper">
            <h2>
              <span className="temperature">{weatherData.temperature}</span>
              <span className="temperatureScale">℃</span>
            </h2>
          </div>
        </div>

        <div className="rightPart">
          <ul>
            <li>{weatherData.description}</li>
            <li>
              wind: <span className="wind">{weatherData.windSpeed} km/h</span>
            </li>
            <li>
              humidity: <span id="hymidity">{weatherData.hymidity} </span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="Waether">
        {headerForm}
        {mainSection}
        <Forecast city={city} />
      </div>
    );
  } else {
    showWeather();
    return "Loading...";
  }
}
