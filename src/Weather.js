import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);

  let weatherData = {
    temperature: 5,
    windSpeed: 25,
    hymidity: 75,
    clouds: 15,
    icon: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
    time: "12:50",
    city: "Kyiv",
  };

  function changeCity(event) {
    setCity(event.target.value);
  }

  function alertCity(event) {
    setLoaded(true);
    event.preventDefault();
    alert(city);
  }

  const headerForm = (
    <form onSubmit={alertCity}>
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
  );

  const mainSection = (
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

  if (loaded) {
    return (
      <div className="Header">
        {headerForm}
        {mainSection}
        {forecastSection}
      </div>
    );
  } else {
    return (
      <div className="Header">
        {headerForm}
        {mainSection}
        {forecastSection}
      </div>
    );
  }
}
