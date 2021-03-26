import React from 'react';
import '../App.css';

import Day from './Day';

export default function DayWeather(props) {
    let days = [];
    for (let i = 0; i < props.daily.length; i++) {
        days.push(
            <Day key={i}
                weather={props.daily[i]}
                lang={props.lang}
                onClick={() => props.onClick(props.daily[i])} />
        );
    }

    return <div className="days-bar">{days}</div>;
}