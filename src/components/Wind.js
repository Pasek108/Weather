import React from 'react';
import '../App.css';

export default function Wind(props) {
    return (
        <div className="wind">
            {props.lang.words.wind_speed}{props.wind_speed} km/h <i className={"wi wi-wind from-" + props.wind_deg + "-deg"}></i>
        </div>
    );
}