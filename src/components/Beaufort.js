import React from 'react';
import '../App.css';

export default function Beaufort(props) {
    let beaufort = props.beaufort;
    if (beaufort < 0.3) beaufort = 0;
    else if (beaufort < 1.6) beaufort = 1;
    else if (beaufort < 3.4) beaufort = 2;
    else if (beaufort < 5.5) beaufort = 3;
    else if (beaufort < 8.0) beaufort = 4;
    else if (beaufort < 10.8) beaufort = 5;
    else if (beaufort < 13.9) beaufort = 6;
    else if (beaufort < 17.2) beaufort = 7;
    else if (beaufort < 20.8) beaufort = 8;
    else if (beaufort < 24.5) beaufort = 9;
    else if (beaufort < 28.5) beaufort = 10;
    else if (beaufort < 32.6) beaufort = 11;
    else beaufort = 12;

    return (
        <div className="beaufort">
            {props.lang.words.beaufort_scale}<i className={"wi wi-wind-beaufort-" + beaufort}></i>
        </div>
    );
}