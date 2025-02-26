import React from "react"
import "../styles/weather-info.css"

import WeatherIcon from "./WeatherIcon"

export default function DayDetails(props) {
  if (props.current == null) return <div className="weather">Loading...</div>

  let wind_speed = props.current.windSpeed

  let temp = props.current.temperature || ((props.current.temperatureHigh + props.current.temperatureLow) / 2)
  let feels_like = props.current.apparentTemperature || ((props.current.apparentTemperatureHigh + props.current.apparentTemperatureLow) / 2)

  return (
    <div className="weather">
      <div className="day-weather">
        <DayName date={props.current.time} lang={props.lang} now={props.current.temperature != null} />
        <WeatherDescription weather_description={props.current.summary} id={props.current.icon} sunrise={props.sunrise} sunset={props.sunset} />
      </div>

      <div className="row weather-details">
        <div className="col">
          <Temp temp={temp} />
          <Feels feels={feels_like} lang={props.lang} />
          <Humidity humidity={props.current.humidity} lang={props.lang} />
          <Pressure pressure={props.current.pressure} lang={props.lang} />
        </div>
        <div className="col">
          <Clouds clouds={props.current.cloudCover * 100} lang={props.lang} />
          <Visibility visibility={props.current.visibility} lang={props.lang} />
          <Wind wind_speed={wind_speed} wind_deg={props.current.wind_deg} lang={props.lang} />
          <Beaufort beaufort={wind_speed} lang={props.lang} />
        </div>
      </div>
    </div>
  )
}

export function DayName(props) {
  const time_stamp = new Date(props.date * 1000)
  const day_name = props.now ? props.lang.words.now : props.lang.words.day_names[time_stamp.getDay()]
  const day = String(time_stamp.getDate()).padStart(2, "0")
  const month = String(time_stamp.getMonth() + 1).padStart(2, "0")
  const year = String(time_stamp.getFullYear()).padStart(2, "0")

  return (
    <div className="day-name">
      <div>{day_name}</div>
      <div>
        {day}/{month}/{year}
      </div>
    </div>
  )
}

export function Temp(props) {
  return (
    <div className="temp">
      <i className="wi wi-thermometer"></i> {props.temp?.toFixed(2)} &deg;C
    </div>
  )
}

export function Feels(props) {
  return (
    <div className="feels">
      {props.lang?.words.feels_like} {props.feels?.toFixed(2)} &deg;C
    </div>
  )
}

function WeatherDescription(props) {
  let weather = props.weather_description
  if (weather === "Rain and snow" && localStorage.getItem("lang") === "pl") weather = "Śnieg z deszczem"

  return (
    <div>
      <WeatherIcon id={props.id} sunrise={props.sunrise} sunset={props.sunset} size="big" />
      <div className="weather-description">{weather}</div>
    </div>
  )
}

function Humidity(props) {
  return (
    <div className="humidity">
      <i className="wi wi-humidity"></i> {props.lang.words.humidity}
      {props.humidity}%
    </div>
  )
}

function Pressure(props) {
  return (
    <div className="pressure">
      <i className="wi wi-barometer"></i> {props.lang.words.pressure}
      {props.pressure} hPa
    </div>
  )
}

function Clouds(props) {
  return (
    <div className="clouds">
      {props.lang.words.clouds}
      {props.clouds}%
    </div>
  )
}

function Visibility(props) {
  let visibility = `${props.visibility}m`
  if (props.visibility == null) visibility = <i className="wi wi-na"></i>

  return (
    <div className="visibility">
      {props.lang.words.visibility}
      {visibility}
    </div>
  )
}

function Wind(props) {
  return (
    <div className="wind">
      {props.lang.words.wind_speed}
      {props.wind_speed} km/h <i className={`wi wi-wind from-${props.wind_deg}-deg`}></i>
    </div>
  )
}

function Beaufort(props) {
  let beaufort = props.beaufort
  if (beaufort < 2) beaufort = 0
  else if (beaufort < 5) beaufort = 1
  else if (beaufort < 11) beaufort = 2
  else if (beaufort < 19) beaufort = 3
  else if (beaufort < 28) beaufort = 4
  else if (beaufort < 38) beaufort = 5
  else if (beaufort < 49) beaufort = 6
  else if (beaufort < 61) beaufort = 7
  else if (beaufort < 74) beaufort = 8
  else if (beaufort < 88) beaufort = 9
  else if (beaufort < 102) beaufort = 10
  else if (beaufort < 117) beaufort = 11
  else beaufort = 12

  return (
    <div className="beaufort">
      {props.lang.words.beaufort_scale}
      <i className={`wi wi-wind-beaufort-${beaufort}`}></i>
    </div>
  )
}
