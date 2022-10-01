import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="cityInfo">
        <h1>Kyiv</h1>
        <ul className="dateInfo">
          <li>Monday, 21:50</li>
          <li> 12 September 2022</li>
        </ul>
      </div>

      <div className="weatherDetails">
        <div className="leftPart">
          <div className="iconWrapper">
            <img
              className="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="weather icon"
            />
          </div>
          <div className="temperatureWrapper">
            <h2>
              <span className="temperature">24</span>
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
              Clouds: <span className="clouds">15 </span>%
            </li>
            <li>
              Wind: <span className="wind">5 </span>
              <span id="wind-speed-units">km/h</span>
            </li>
            <li>
              Humidity: <span id="hymidity">85 </span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
