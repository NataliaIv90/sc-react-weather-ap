import React, { useState } from "react";
import axios from "axios";
import "./Main.css";

export default function Main(props) {
  let city = props.city;
  let apiKey = "428ced130c91866c290ad7f8a9bb8995";
  let units = "metric";
  let apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

  let [weatherData, setWeatherData] = useState("");

  function getData(responce) {
    setWeatherData({
      temperature: responce.data.main.temp,
      windSpeed: responce.data.wind.speed,
      hymidity: responce.data.main.hymidity,
      clouds: responce.data.clouds.all,
      icon: `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`,
      time: responce.data.dt,
      city: responce.data.city,
    });
    console.log(responce.data);
  }

  // axios.get(apiUrl).then(getData);

  return (
    <div className="Main">
      <div className="cityInfo">
        <h1>{weatherData.city}</h1>
        <ul className="dateInfo">
          <li>Monday, 21:50</li>
          <li> ${weatherData.time}</li>
        </ul>
      </div>

      <div className="weatherDetails">
        <div className="leftPart">
          <div className="iconWrapper">
            <img className="icon" src={weatherData.icon} alt="weather icon" />
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
}
