import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import { InfinitySpin } from "react-loader-spinner";

// import MainSection from "./MainSection";

export default function Weather() {
  const [city, setCity] = useState("Kyiv");
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }

  function setDate(timestamp) {
    let now = new Date(timestamp * 1000);

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

    let minutes =
      now.getMinutes() < 9 ? `0${now.getMinutes()}` : now.getMinutes();

    return (
      <ul>
        <li>
          {now.getDate()} {months[now.getMonth()]} {now.getFullYear()}
        </li>
        <li>
          {days[now.getDay()]} {now.getHours()}:{minutes}
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
      cityName: responce.data.city,
      time: responce.data.time,
    });
    setLoaded(true);
  }

  function showWeather() {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=60e7tc4c9f70d174aa0f4647b8bao3f3`;
    axios.get(apiUrl).then(getData);

    console.log(weatherData.cityName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
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
        <h1>{weatherData.cityName}</h1>
        <div className="dateInfo">{setDate(weatherData.time)}</div>
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
        <Forecast currentCity={city} apiCity={weatherData.cityName} />
      </div>
    );
  } else {
    showWeather();
    return (
      <div className="Waether">
        <InfinitySpin width="200" color="#ffffff55" />
      </div>
    );
    // "Loading...";
  }
}
