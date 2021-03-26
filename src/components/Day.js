import React from 'react';
import '../App.css';

import DayName from './DayName';
import Icon from './Icon';
import Temperature from './Temperature';

export default function Day(props) {
    let weather = {
        day: "",
        weather_id: "",
        temp: "",
        feels: ""
    };

    let is_loaded = 0;
    if (props.weather !== undefined && props.weather.temp !== undefined) is_loaded = 1;

    if (is_loaded) {
        weather.day = props.weather.dt;
        weather.weather_id = props.weather.weather[0].id;
        weather.temp = props.weather.temp.day;
        weather.feels = props.weather.feels_like.day;
    }

    return (
        <div className="day-weather" onClick={props.onClick}>
            <DayName day={weather.day} lang={props.lang} />
            <Icon id={weather.weather_id} size="small" />
            <Temperature temp={weather.temp} feels={weather.feels} size="small" lang={props.lang} />
        </div>
    );
}