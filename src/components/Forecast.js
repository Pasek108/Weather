import React from "react";
import "../styles/forecast.css";

import { DayName, Temp, Feels } from "./DayDetails";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let days = [];

  for (let i = 0; i < props.daily.data?.length; i++) {
    days.push(
      <div key={i} className="forecast-card blur" onClick={() => props.onClick(props.daily.data[i])}>
        <DayName date={props.daily.data[i].time} lang={props.lang} />
        <WeatherIcon id={props.daily.data[i].icon} size="small" />

        <div className="temperature">
          <Temp temp={(props.daily.data[i].temperatureHigh + props.daily.data[i].temperatureLow) / 2} />
          <Feels feels={(props.daily.data[i].apparentTemperatureHigh + props.daily.data[i].apparentTemperatureLow) / 2} />
        </div>
      </div>
    );
  }

  return <div className="forecast">{days}</div>;
}
