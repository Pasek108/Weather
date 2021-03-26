import React from 'react';
import '../App.css';

export default function Temperature(props) {
    if (props.size === "small") {
        return (
            <div className="temperature">
                <div className="real">{props.temp}&deg;C</div>
                <div className="feels">{props.feels}&deg;C</div>
            </div>
        );
    }
    else {
        return (
            <div className="temperature">
                <div className="temp">
                    <i className="wi wi-thermometer"></i> {props.temp} &deg;C
            </div>
                <div className="feels">
                    {props.lang.words.feels_like}{props.feels} &deg;C
                </div>
            </div>
        );
    }
}