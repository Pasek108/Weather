import React from "react";
import "../App.css";

import { DayName, Temp, Feels } from "./DayDetails";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let days = [];

  for (let i = 0; i < props.daily.length; i++) {
    days.push(
      <div key={i} className="forecast-card blur" onClick={() => props.onClick(props.daily[i])}>
        <DayName date={props.daily[i].dt} lang={props.lang} />
        <WeatherIcon id={props.daily[i].weather[0].id} size="small" />

        <div className="temperature">
          <Temp temp={props.daily[i].temp.day} />
          <Feels feels={props.daily[i].feels_like.day} />
        </div>
      </div>
    );
  }

  return <div className="forecast">{days}</div>;
}
