import React from 'react';
import '../App.css';

export default function Clouds(props) {
    return (
        <div className="clouds">
            {props.lang.words.clouds}{props.clouds}%
        </div>
    );
}