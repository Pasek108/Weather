import React from 'react';
import '../App.css';

export default function Clock(props) {
    const hour = props.date.getHours().toString().padStart(2, "0");
    const minute = props.date.getMinutes().toString().padStart(2, "0");
    const second = props.date.getSeconds().toString().padStart(2, "0");

    const day = props.date.getDate().toString().padStart(2, "0");
    const month = (props.date.getMonth() + 1).toString().padStart(2, "0");
    const year = props.date.getFullYear().toString().padStart(2, "0");

    const sunrise_time = {
        hour: new Date(props.sunrise * 1000).getHours().toString().padStart(2, "0"),
        minute: new Date(props.sunrise * 1000).getMinutes().toString().padStart(2, "0")
    }

    const sunset_time = {
        hour: new Date(props.sunset * 1000).getHours().toString().padStart(2, "0"),
        minute: new Date(props.sunset * 1000).getMinutes().toString().padStart(2, "0")
    }

    const date = <div className="date">{day}/{month}/{year}</div>;
    const time = <div className="time">{hour}:{minute}:{second}</div>
    const sunrise_sunset = (
        <div className="sunrise-sunset">
            <div title={props.lang.words.surise}><i className={"wi wi-sunrise"}></i> {sunrise_time.hour}:{sunrise_time.minute}</div>
            <div title={props.lang.words.sunset}><i className={"wi wi-sunset"}></i> {sunset_time.hour}:{sunset_time.minute}</div>
        </div>
    );

    return (
        <div className="clock">
            <h4>{props.lang.words.actual_time}</h4>
            {date}{time}{sunrise_sunset}
            <div className="actual" onClick={props.onClick}>{props.lang.words.show_actual_weather}</div>
        </div>
    );
}