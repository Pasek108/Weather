import React from 'react';
import '../App.css';

export default function DayName(props) {
    const time_stamp = new Date(props.day * 1000);
    const day_name = props.lang.words.day_names[time_stamp.getDay()];
    const day = time_stamp.getDate().toString().padStart(2, "0");
    const month = (time_stamp.getMonth() + 1).toString().padStart(2, "0");
    const year = time_stamp.getFullYear().toString().padStart(2, "0");
    const date = "" + day + "/" + month + "/" + year;

    return (
        <div className="day">
            {day_name}
            <div className="date">{date}</div>
        </div>
    );
}