import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const apiKey = "428ced130c91866c290ad7f8a9bb8995";
  let units = "metric";
  const [city, setCity] = useState("Kyiv");
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }

  function setDate() {
    let now = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
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
      temperature: Math.round(responce.data.main.temp),
      windSpeed: Math.round(responce.data.wind.speed),
      hymidity: responce.data.main.humidity,
      clouds: responce.data.clouds.all,
      description: responce.data.weather[0].description,
      iconCode: responce.data.weather[0].icon,
      time: setDate(responce.data.timezone),
      city: responce.data.name,
      // date: new Date(responce.data.dt * 1000),
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
  }

  function showWeather(event) {
    setLoaded(true);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getData);
    console.log(apiUrl);
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
            <WeatherIcon iconCode={weatherData.iconCode}/>
          </div>
          <div className="temperatureWrapper">
            <h2>
              <span className="temperature">{weatherData.temperature}</span>
              <span className="temperatureScale">
                <a href="/" className="scaleLink active celciusLink">
                  ℃
                </a>
                |
                <a href="/" className="scaleLink fahrenheitLink">
                  ℉
                </a>
              </span>
            </h2>
          </div>
                </div>

        <div className="rightPart">
          <ul>
            <li>
              Clouds: <span className="clouds">{weatherData.clouds} </span>%
            </li>
            <li>
              Wind: <span className="wind">{weatherData.windSpeed} </span>
              <span id="wind-speed-units">km/h</span>
            </li>
            <li>
              Humidity: <span id="hymidity">{weatherData.hymidity} </span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const forecastSection = (
    <div className="FutureForecast">
      <ul>
        <ul className="day">
          <li className="weekDay">mon</li>
          <li className="date">13.09</li>
          <li className="icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="weather icon"
            />
          </li>
          <li className="temperature min">+5℃</li>
          <li className="temperature max">+15℃</li>
        </ul>
        <ul className="day">
          <li className="weekDay">mon</li>
          <li className="date">13.09</li>
          <li className="icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="weather icon"
            />
          </li>
          <li className="temperature min">+5℃</li>
          <li className="temperature max">+15℃</li>
        </ul>
        <ul className="day">
          <li className="weekDay">mon</li>
          <li className="date">13.09</li>
          <li className="icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="weather icon"
            />
          </li>
          <li className="temperature min">+5℃</li>
          <li className="temperature max">+15℃</li>
        </ul>
        <ul className="day">
          <li className="weekDay">mon</li>
          <li className="date">13.09</li>
          <li className="icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="weather icon"
            />
          </li>
          <li className="temperature min">+5℃</li>
          <li className="temperature max">+15℃</li>
        </ul>
        <ul className="day">
          <li className="weekDay">mon</li>
          <li className="date">13.09</li>
          <li className="icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="weather icon"
            />
          </li>
          <li className="temperature min">+5℃</li>
          <li className="temperature max">+15℃</li>
        </ul>
      </ul>
    </div>
  );

  // const loadingForecastSection = (
  //   <div className="Main">
  //     <p>Waiting for data input...</p>
  //   </div>
  // );

  if (loaded) {
    return (
      <div className="Waether">
        {headerForm}
        {mainSection}
        {forecastSection}

      </div>
    );
  } else {
    showWeather();
    return "Loading...";
    // Loading form without default city forecast loading
    // return (
    //   <div className="Waether">
    //     {headerForm}
    //     {loadingForecastSection}
    //   </div>
    // );
  }
}
