import React from 'react';
import '../App.css';

export default function Humidity(props) {
    return (
        <div className="humidity">
            <i className="wi wi-humidity"></i> {props.lang.words.humidity}{props.humidity}%
        </div>
    );
}