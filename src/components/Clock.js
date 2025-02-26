import React, { useState, useEffect } from "react"
import "../styles/clock.css"

export default function Clock(props) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const sunrise_time = new Date(props.sunrise * 1000).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit",  hour12: false });
  const sunset_time = new Date(props.sunset * 1000).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit",  hour12: false });

  return (
    <div className="clock">
      <h4>{props.lang.words.actual_time}</h4>
      <div className="time">{date.toLocaleTimeString("en-GB")}</div>
      <div className="date">{date.toLocaleDateString("en-GB")}</div>
      <div className="sunrise-sunset">
        <div title={props.lang.words.surise}>
          <i className="wi wi-sunrise"></i> {sunrise_time}
        </div>
        <div title={props.lang.words.sunset}>
          <i className="wi wi-sunset"></i> {sunset_time}
        </div>
      </div>
      <div className="show-current-weather" onClick={props.onClick}>
        {props.lang.words.show_actual_weather}
      </div>
    </div>
  )
}
