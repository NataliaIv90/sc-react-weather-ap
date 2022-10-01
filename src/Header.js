import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <input
          type="text"
          placeholder="Enter a city..."
          className="search-city-input"
          autoComplete="off"
          autoFocus="on"
        />

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
