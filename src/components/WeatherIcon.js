import React from "react";
import "../App.css";
import "../icons/css/weather-icons.min.css";
import "../icons/css/weather-icons-wind.min.css";

export default function WeatherIcon(props) {
  const icons = [
    { id: 200, icon: "thunderstorm", icons: ["day-thunderstorm", "night-thunderstorm"] },
    { id: 201, icon: "thunderstorm", icons: ["day-thunderstorm", "night-thunderstorm"] },
    { id: 202, icon: "thunderstorm", icons: ["day-thunderstorm", "night-thunderstorm"] },
    { id: 210, icon: "lightning", icons: ["day-lightning", "night-lightning"] },
    { id: 211, icon: "lightning", icons: ["day-lightning", "night-lightning"] },
    { id: 212, icon: "lightning", icons: ["day-lightning", "night-lightning"] },
    { id: 221, icon: "lightning", icons: ["day-lightning", "night-lightning"] },
    { id: 230, icon: "thunderstorm", icons: ["day-thunderstorm", "night-thunderstorm"] },
    { id: 231, icon: "thunderstorm", icons: ["day-thunderstorm", "night-thunderstorm"] },
    { id: 232, icon: "thunderstorm", icons: ["day-thunderstorm", "night-thunderstorm"] },
    { id: 300, icon: "sprinkle", icons: ["day-sprinkle", "night-sprinkle"] },
    { id: 301, icon: "sprinkle", icons: ["day-sprinkle", "night-sprinkle"] },
    { id: 302, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 310, icon: "rain-mix", icons: ["day-rain-mix", "night-rain-mix"] },
    { id: 311, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 312, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 313, icon: "showers", icons: ["day-showers", "night-showers"] },
    { id: 314, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 321, icon: "sprinkle", icons: ["day-sprinkle", "night-sprinkle"] },
    { id: 500, icon: "sprinkle", icons: ["day-sprinkle", "night-sprinkle"] },
    { id: 501, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 502, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 503, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 504, icon: "rain", icons: ["day-rain", "night-rain"] },
    { id: 511, icon: "snowflake-cold", icons: ["snowflake-cold", "snowflake-cold"] },
    { id: 520, icon: "showers", icons: ["day-showers", "night-showers"] },
    { id: 521, icon: "showers", icons: ["day-showers", "night-showers"] },
    { id: 522, icon: "showers", icons: ["day-showers", "night-showers"] },
    { id: 531, icon: "storm-showers", icons: ["day-storm-showers", "night-storm-showers"] },
    { id: 600, icon: "snow", icons: ["day-snow", "night-snow"] },
    { id: 601, icon: "snow", icons: ["day-snow", "night-snow"] },
    { id: 602, icon: "snow", icons: ["day-snow", "night-snow"] },
    { id: 611, icon: "sleet", icons: ["day-sleet", "night-sleet"] },
    { id: 612, icon: "sleet", icons: ["day-sleet", "night-sleet"] },
    { id: 613, icon: "sleet", icons: ["day-sleet", "night-sleet"] },
    { id: 615, icon: "rain-mix", icons: ["day-rain-mix", "night-rain-mix"] },
    { id: 616, icon: "rain-mix", icons: ["day-rain-mix", "night-rain-mix"] },
    { id: 620, icon: "rain-mix", icons: ["day-rain-mix", "night-rain-mix"] },
    { id: 621, icon: "snow", icons: ["day-snow", "night-snow"] },
    { id: 622, icon: "snow", icons: ["day-snow", "night-snow"] },
    { id: 701, icon: "windy", icons: ["windy", "windy"] },
    { id: 711, icon: "smoke", icons: ["smoke", "smoke"] },
    { id: 721, icon: "day-haze", icons: ["day-haze", "day-haze"] },
    { id: 731, icon: "dust", icons: ["dust", "dust"] },
    { id: 741, icon: "fog", icons: ["day-fog", "night-fog"] },
    { id: 751, icon: "sandstorm", icons: ["sandstorm", "sandstorm"] },
    { id: 761, icon: "dust", icons: ["dust", "dust"] },
    { id: 762, icon: "dust", icons: ["dust", "dust"] },
    { id: 771, icon: "cloudy-gusts", icons: ["day-cloudy-gusts", "night-cloudy-gusts"] },
    { id: 781, icon: "tornado", icons: ["tornado", "tornado"] },
    { id: 800, icon: "day-sunny", icons: ["day-sunny", "night-clear"] },
    { id: 801, icon: "cloudy-gusts", icons: ["day-cloudy-gusts", "night-alt-partly-cloudy"] },
    { id: 802, icon: "cloudy-gusts", icons: ["day-cloudy-gusts", "night-alt-partly-cloudy"] },
    { id: 803, icon: "cloudy", icons: ["day-cloudy", "night-cloudy"] },
    { id: 804, icon: "cloudy", icons: ["day-cloudy", "night-cloudy"] },
  ];

  let icon_class = "";
  const now_hours = new Date().getHours();
  const now_minutes = new Date().getMinutes();
  const sunrise_hours = new Date(props.sunrise * 1000).getHours();
  const sunrise_minutes = new Date(props.sunrise * 1000).getMinutes();
  const sunset_hours = new Date(props.sunset * 1000).getHours();
  const sunset_minutes = new Date(props.sunset * 1000).getMinutes();

  let is_night = 1;
  if (now_hours === sunrise_hours && now_minutes > sunrise_minutes) is_night = 0;
  else if (now_hours === sunset_hours && now_minutes < sunset_minutes) is_night = 0;
  else if (now_hours > sunrise_hours && now_hours < sunset_hours) is_night = 0;

  for (let i = 0; i < icons.length; i++) {
    if (props.id === icons[i].id) {
      if (props.size === "big") icon_class = `wi wi-${icons[i].icons[is_night]}`;
      else icon_class = `wi wi-${icons[i].icon}`;
      break;
    }
  }

  return (
    <div className="icon">
      <i className={icon_class}></i>
    </div>
  );
}
