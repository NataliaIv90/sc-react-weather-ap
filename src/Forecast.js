import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function Forecast(props) {
  console.log(props.data);

  return (
    <div className="FutureForecast">
      <ul className="day">
        <li className="weekDay">tue</li>
        <li className="icon">
          <ForecastIcon iconCode="scattered-clouds-day" />
        </li>
        <li className="temperature min">
          {Math.round(props.data[0].temperature.maximum)}{" "}
          <span className="temperature max">
            {Math.round(props.data[0].temperature.minimum)}
          </span>
        </li>
      </ul>
    </div>
  );
}
