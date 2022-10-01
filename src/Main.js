import React from "react";

export default function Main() {
  return (
    <div>
      <div>
        <h1>Kyiv</h1>
        <ul>
          <li>Monday, 21:50</li>
          <li> 12 September 2022</li>
        </ul>
      </div>
      <div>
        <img
          className="icon"
          src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
          alt="weather icon"
        />
        <h2>
          <strong className="temperature">24</strong>
          <span className="temperature-scale">
            <a href="/" className="scale-link active celcius-link">
              ℃
            </a>
            |
            <a href="/" className="scale-link fahrenheit-link">
              ℉
            </a>
          </span>
        </h2>
      </div>

      <div>
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
  );
}
