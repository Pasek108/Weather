import React from 'react';
import '../App.css';

export default function ShownDay(props) {
    let time_stamp = "";
    let day_name = "";
    let day = "";
    let month = "";
    let year = "";
    let date = <div className="now">{props.lang.words.now}</div>;

    if (props.date !== "") {
        time_stamp = new Date(props.date * 1000);
        day_name = props.lang.words.day_names[time_stamp.getDay()];
        day = time_stamp.getDate().toString().padStart(2, "0");
        month = (time_stamp.getMonth() + 1).toString().padStart(2, "0");
        year = time_stamp.getFullYear().toString().padStart(2, "0");
        date = "" + day + "/" + month + "/" + year;
    }

    return (
        <div className="shown-day">
            <div>{day_name}</div>
            <div>{date}</div>
        </div>
    );
}