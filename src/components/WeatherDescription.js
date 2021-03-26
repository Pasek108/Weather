import React from 'react';
import '../App.css';

export default function WeatherDescription(props) {
    let weather = props.weather_description;
    if (weather === "Rain and snow" && localStorage.getItem("lang") === "pl") {
        weather = "Śnieg z deszczem";
    }

    return (
        <div className="weather-description">
            <h3>{weather}</h3>
        </div>
    );
}