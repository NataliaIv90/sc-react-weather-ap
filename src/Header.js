import React from "react";
import WeatherForecast from "./WeatherForecast";

export default function Header() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter a city..."
          className="plain-border search-city-input"
          autoComplete="off"
          autoFocus="on"
        />

        <button type="submit">Search</button>
      </form>

      <WeatherForecast />
    </div>
  );
}
