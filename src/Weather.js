import React from "react";
import FutureForecast from "./FutureForecast";
import Header from "./Header";
import Main from "./Main";

export default function Weather() {
  return (
    <div className="Weather">
      <Header />
      <Main />
      <FutureForecast />
    </div>
  );
}
