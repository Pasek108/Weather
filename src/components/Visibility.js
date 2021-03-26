import React from 'react';
import '../App.css';

export default function Visibility(props) {
    let visibility = "" + props.visibility + "m";
    if (props.visibility === undefined) visibility = <i className={"wi wi-na"}></i>;
    return (
        <div className="visibility">
            {props.lang.words.visibility}{visibility}
        </div>
    );
}