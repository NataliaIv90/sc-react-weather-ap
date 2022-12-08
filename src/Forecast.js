import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastIcon from "./ForecastIcon";
import "./Forecast.css";
import { InfinitySpin } from "react-loader-spinner";

export default function Forecast(props) {
  const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.currentCity}&key=60e7tc4c9f70d174aa0f4647b8bao3f3`;
  let [forecastData, setForecastData] = useState("");
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.apiCity]);

  function showWeather(responce) {
    setLoaded(true);
    setForecastData(responce.data.daily);
    console.log(forecastData);
  }

  function setDay(data) {
    let date = new Date(data.time * 1000);
    let day = date.getDay();

    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="FutureForecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div>
                <ul className="day">
                  <li className="weekDay">{setDay(dailyForecast)}</li>
                  <li className="icon">
                    <ForecastIcon iconCode={dailyForecast.condition.icon} />
                  </li>
                  <li className="temperature min">
                    {Math.round(dailyForecast.temperature.maximum)}°{" "}
                    <span className="temperature max">
                      {Math.round(dailyForecast.temperature.minimum)}°
                    </span>
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    axios.get(forecastApiUrl).then(showWeather);
    return (
      <div className="FutureForecast_loading">
        <InfinitySpin width="200" color="#ffffff55" />
      </div>
    );
  }
}
