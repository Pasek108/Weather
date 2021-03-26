import React from 'react';
import '../App.css';

export default function Pressure(props) {
    return (
        <div className="pressure">
            <i className="wi wi-barometer"></i> {props.lang.words.pressure}{props.pressure} hPa
        </div>
    );
}