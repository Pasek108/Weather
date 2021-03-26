import React from 'react';
import '../App.css';

import Icon from './Icon';
import ShownDay from './ShownDay';
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Pressure from './Pressure';
import Clouds from './Clouds';
import Visibility from './Visibility';
import Wind from './Wind';
import Beaufort from './Beaufort';

export default function DayDetails(props) {
    let current = {
        weather_description: "",
        weather_id: "",
        sunrise: "",
        sunset: "",
        temp: "",
        feels: "",
        clouds: "",
        visibility: "",
        humidity: "",
        pressure: "",
        wind_speed: "",
        wind_deg: ""
    };

    let is_loaded = 0;
    if (props.current !== undefined && props.current.weather !== undefined) is_loaded = 1;

    if (is_loaded) {
        current.weather_description = props.current.weather[0].description;
        current.weather_description = current.weather_description.charAt(0).toUpperCase() + current.weather_description.slice(1);
        current.weather_id = props.current.weather[0].id;
        current.sunrise = props.current.sunrise;
        current.sunset = props.current.sunset;
        if (props.current.temp.day !== undefined) current.temp = props.current.temp.day;
        else current.temp = props.current.temp;
        if (props.current.feels_like.day !== undefined) current.feels = props.current.feels_like.day;
        else current.feels = props.current.feels_like;
        current.clouds = props.current.clouds;
        current.visibility = props.current.visibility;
        current.humidity = props.current.humidity;
        current.pressure = props.current.pressure;
        current.wind_speed = (props.current.wind_speed * 3.6).toFixed(2);
        current.wind_deg = props.current.wind_deg;
    }

    return (
        <div className="day-details">
            <Icon id={current.weather_id} sunrise={current.sunrise} sunset={current.sunset} size="big" />
            <ShownDay date={(current.visibility !== undefined) ? "" : props.current.dt} lang={props.lang} />
            <WeatherDescription weather_description={current.weather_description} />
            <div className="block1">
                <Temperature temp={current.temp} feels={current.feels} size="big" lang={props.lang} />
                <Humidity humidity={current.humidity} lang={props.lang} />
                <Pressure pressure={current.pressure} lang={props.lang} />
            </div>
            <div className="block2">
                <Clouds clouds={current.clouds} lang={props.lang} />
                <Visibility visibility={current.visibility} lang={props.lang} />
                <Wind wind_speed={current.wind_speed} wind_deg={current.wind_deg} lang={props.lang} />
                <Beaufort beaufort={props.current.wind_speed} lang={props.lang} />
            </div>
        </div>
    );
}