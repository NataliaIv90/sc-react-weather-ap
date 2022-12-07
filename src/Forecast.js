import React, { useState } from "react";
import axios from "axios";
import ForecastIcon from "./ForecastIcon";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState("");
  let [loaded, setLoaded] = useState(false);

  function setDay() {
    let date = new Date(forecastData[0].time * 1000);
    let day = date.getDay();

    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    return days[day];
  }

  function getForecastData(responce) {
    setForecastData(responce.data.daily);
    console.log(forecastData);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="FutureForecast">
        <ul className="day">
          <li className="weekDay">{setDay()}</li>
          <li className="icon">
            <ForecastIcon iconCode="scattered-clouds-day" />
          </li>
          <li className="temperature min">
            {Math.round(forecastData[0].temperature.maximum)}{" "}
            <span className="temperature max">
              {Math.round(forecastData[0].temperature.minimum)}
            </span>
          </li>
        </ul>
      </div>
    );
  } else {
    const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=60e7tc4c9f70d174aa0f4647b8bao3f3`;
    axios.get(forecastApiUrl).then(getForecastData);
  }
}
