import React from 'react';
import './App.css';
import './icons/css/weather-icons.min.css';
import './icons/css/weather-icons-wind.min.css';

const lang_pl = {
  lang: "pl",
  words: {
    change_localisation: "Zmień lokalizacje",
    feels_like: "Odczuwalna: ",
    humidity: "Wilgotność: ",
    pressure: "Ciśnienie: ",
    clouds: "Zachmurzenie: ",
    visibility: "Widoczność: ",
    wind_speed: "Prędkość wiatru: ",
    beaufort_scale: "W skali Beauforta: ",
    actual_time: "Aktualny czas:",
    show_actual_weather: "Pokaż aktualną pogode",
    surise: "zachód słońca",
    sunset: "wschód słońca",
    now: "Teraz",
    day_names: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
  }
};

const lang_en = {
  lang: "en",
  words: {
    change_localisation: "Change localisation",
    feels_like: "Feels like: ",
    humidity: "Humidity: ",
    pressure: "Pressure: ",
    clouds: "Clouds: ",
    visibility: "Visibility: ",
    wind_speed: "Wind speed: ",
    beaufort_scale: "Beaufort scale: ",
    actual_time: "Actual time",
    show_actual_weather: "Show actual weather",
    surise: "sunrise",
    sunset: "sunset",
    now: "Now",
    day_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
};

let lang = lang_pl;

if (localStorage.getItem("lang") === "en") lang = lang_en;
else localStorage.setItem("lang", "pl");

class Icon extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
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

    let icon = "";
    let icon_class = "";
    const now_hours = new Date().getHours();
    const now_minutes = new Date().getMinutes();
    const sunrise_hours = new Date(this.props.sunrise * 1000).getHours();
    const sunrise_minutes = new Date(this.props.sunrise * 1000).getMinutes();
    const sunset_hours = new Date(this.props.sunset * 1000).getHours();
    const sunset_minutes = new Date(this.props.sunset * 1000).getMinutes();

    for (let i = 0; i < icons.length; i++) {
      if (this.props.id === icons[i].id) {
        if (this.props.size !== "big") {
          icon = <i className={"wi wi-" + icons[i].icon}></i>;
          icon_class = "icon";
        }
        else {
          let day_or_night = 1;
          if (now_hours === sunrise_hours && now_minutes > sunrise_minutes) day_or_night = 0;
          else if (now_hours === sunset_hours && now_minutes < sunset_minutes) day_or_night = 0;
          else if (now_hours > sunrise_hours && now_hours < sunset_hours) day_or_night = 0;

          icon = <i className={"wi wi-" + icons[i].icons[day_or_night]}></i>;
          icon_class = "big-icon";
        }
      }
    }

    return (
      <div className={icon_class}>
        {icon}
      </div>
    );
  }
}

class DayName extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const time_stamp = new Date(this.props.day * 1000);
    const day_name = lang.words.day_names[time_stamp.getDay()];
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
}

class Day extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let weather = {
      day: "",
      weather_id: "",
      temp: "",
      feels: ""
    };

    let is_loaded = 0;
    if (this.props.weather !== undefined && this.props.weather.temp !== undefined) is_loaded = 1;

    if (is_loaded) {
      weather.day = this.props.weather.dt;
      weather.weather_id = this.props.weather.weather[0].id;
      weather.temp = this.props.weather.temp.day;
      weather.feels = this.props.weather.feels_like.day;
    }

    return (
      <div className="day-weather" onClick={this.props.onClick}>
        <DayName day={weather.day} />
        <Icon id={weather.weather_id} size="small" />
        <Temperature temp={weather.temp} feels={weather.feels} size="small" />
      </div>
    );
  }
}

class DayWeather extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let days = [];
    for (let i = 0; i < this.props.daily.length; i++) {
      days.push(<Day key={i} weather={this.props.daily[i]} onClick={() => this.props.onClick(this.props.daily[i])} />);
    }

    return <div className="days-bar">{days}</div>;
  }
}

class DayDetails extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let current = {
      weather_description: "",
      weather_id: "",
      sunrise: "",
      sunset: "",
      temp: "",
      feels: "",
      clouds: "",
      visibility: "",
      humidity: "",
      pressure: "",
      wind_speed: "",
      wind_deg: ""
    };

    let is_loaded = 0;
    if (this.props.current !== undefined && this.props.current.weather !== undefined) is_loaded = 1;

    if (is_loaded) {
      current.weather_description = this.props.current.weather[0].description;
      current.weather_description = current.weather_description.charAt(0).toUpperCase() + current.weather_description.slice(1);
      current.weather_id = this.props.current.weather[0].id;
      current.sunrise = this.props.current.sunrise;
      current.sunset = this.props.current.sunset;
      if (this.props.current.temp.day !== undefined) current.temp = this.props.current.temp.day;
      else current.temp = this.props.current.temp;
      if (this.props.current.feels_like.day !== undefined) current.feels = this.props.current.feels_like.day;
      else current.feels = this.props.current.feels_like;
      current.clouds = this.props.current.clouds;
      current.visibility = this.props.current.visibility;
      current.humidity = this.props.current.humidity;
      current.pressure = this.props.current.pressure;
      current.wind_speed = (this.props.current.wind_speed * 3.6).toFixed(2);
      current.wind_deg = this.props.current.wind_deg;
    }

    return (
      <div className="day-details">
        <Icon id={current.weather_id} sunrise={current.sunrise} sunset={current.sunset} size="big" />
        <ShownDay date={(current.visibility !== undefined) ? "" : this.props.current.dt} />
        <WeatherDescription weather_description={current.weather_description} />
        <div className="block1">
          <Temperature temp={current.temp} feels={current.feels} size="big" />
          <Humidity humidity={current.humidity} />
          <Pressure pressure={current.pressure} />
        </div>
        <div className="block2">
          <Clouds clouds={current.clouds} />
          <Visibility visibility={current.visibility} />
          <Wind wind_speed={current.wind_speed} wind_deg={current.wind_deg} />
          <Beaufort beaufort={this.props.current.wind_speed} />
        </div>
      </div>
    );
  }
}

class ShownDay extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let time_stamp = "";
    let day_name = "";
    let day = "";
    let month = "";
    let year = "";
    let date = <div className="now">{lang.words.now}</div>;

    if (this.props.date !== "") {
      time_stamp = new Date(this.props.date * 1000);
      day_name = lang.words.day_names[time_stamp.getDay()];
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
}

class WeatherDescription extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weather-description">
        <h3>{this.props.weather_description}</h3>
      </div>
    );
  }
}

class Temperature extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.size === "small") {
      return (
        <div className="temperature">
          <div className="real">{this.props.temp}&deg;C</div>
          <div className="feels">{this.props.feels}&deg;C</div>
        </div>
      );
    }
    else {
      return (
        <div className="temperature">
          <div className="temp">
            <i className="wi wi-thermometer"></i> {this.props.temp} &deg;C
        </div>
          <div className="feels">
            {lang.words.feels_like}{this.props.feels} &deg;C
        </div>
        </div>
      );
    }
  }
}

class Humidity extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="humidity">
        <i className="wi wi-humidity"></i> {lang.words.humidity}{this.props.humidity}%
      </div>
    );
  }
}

class Pressure extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pressure">
        <i className="wi wi-barometer"></i> {lang.words.pressure}{this.props.pressure} hPa
      </div>
    );
  }
}

class Clouds extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clouds">
        {lang.words.clouds}{this.props.clouds}%
      </div>
    );
  }
}

class Visibility extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let visibility = "" + this.props.visibility + "m";
    if (this.props.visibility === undefined) visibility = <i className={"wi wi-na"}></i>;
    return (
      <div className="visibility">
        {lang.words.visibility}{visibility}
      </div>
    );
  }
}

class Wind extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wind">
        {lang.words.wind_speed}{this.props.wind_speed} km/h <i className={"wi wi-wind from-" + this.props.wind_deg + "-deg"}></i>
      </div>
    );
  }
}

class Beaufort extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let beaufort = this.props.beaufort;
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
        {lang.words.beaufort_scale}<i className={"wi wi-wind-beaufort-" + beaufort}></i>
      </div>
    );
  }
}

class Clock extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const hour = this.props.date.getHours().toString().padStart(2, "0");
    const minute = this.props.date.getMinutes().toString().padStart(2, "0");
    const second = this.props.date.getSeconds().toString().padStart(2, "0");

    const day = this.props.date.getDate().toString().padStart(2, "0");
    const month = (this.props.date.getMonth() + 1).toString().padStart(2, "0");
    const year = this.props.date.getFullYear().toString().padStart(2, "0");

    const sunrise_time = {
      hour: new Date(this.props.sunrise * 1000).getHours().toString().padStart(2, "0"),
      minute: new Date(this.props.sunrise * 1000).getMinutes().toString().padStart(2, "0")
    }

    const sunset_time = {
      hour: new Date(this.props.sunset * 1000).getHours().toString().padStart(2, "0"),
      minute: new Date(this.props.sunset * 1000).getMinutes().toString().padStart(2, "0")
    }

    const date = <div className="date">{day}/{month}/{year}</div>;
    const time = <div className="time">{hour}:{minute}:{second}</div>
    const sunrise_sunset = (
      <div className="sunrise-sunset">
        <div title={lang.words.surise}><i className={"wi wi-sunrise"}></i> {sunrise_time.hour}:{sunrise_time.minute}</div>
        <div title={lang.words.sunset}><i className={"wi wi-sunset"}></i> {sunset_time.hour}:{sunset_time.minute}</div>
      </div>
    );

    return (
      <div className="clock">
        <h4>{lang.words.actual_time}</h4>
        {date}{time}{sunrise_sunset}
        <div className="actual" onClick={this.props.onClick}>{lang.words.show_actual_weather}</div>
      </div>
    );
  }
}

class SearchCity extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = () => this.props.handleChange(document.getElementById("search"));
  handleClick = () => document.getElementById("search").value = "";

  render() {
    return (
      <div className="searchCity">
        <input className="search" onClick={this.handleClick} onChange={this.handleChange} id="search" type="text" placeholder={lang.words.change_localisation} />
        <div className="locations">{this.props.locations}</div>
      </div>
    );
  }
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      date: new Date(),
      dayWeather: undefined,
      locations: undefined
    }

    this.handleChange = this.handleChange.bind(this);
    this.showWeather = this.showWeather.bind(this);
    this.showActualWeather = this.showActualWeather.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("lang") === "en") this.getWeather(51.509865, -0.118092, "London", "England", "United Kingdom");
    else this.getWeather(52.229675, 21.012230, "Warszawa", "Województwo mazowieckie", "Polska");
    this.timerID = setTimeout(() => { }, 1000)
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  async getWeather(lat, lon, name, adminName, country) {
    let array = [];
    this.setState({ locations: array });

    let x = lat;
    let y = lon;
    document.getElementById("search").value = "" + name + ", " + adminName + ", " + country;
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        x = position.coords.latitude;
        y = position.coords.longitude;
      });
    }*/

    let url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.set('lat', x);
    url.searchParams.append('lon', y);
    url.searchParams.append('lang', lang.lang);
    url.searchParams.append('units', 'metric');
    url.searchParams.append('exclude', 'minutely,alerts');
    url.searchParams.append('appid', 'c85db9a25d5b35109ec7aecb2d7ec070');

    const api_call = await fetch(url);
    const response = await api_call.json();
    console.log(response);
    this.setState({ data: response });
  }

  handleChange(e) {
    clearTimeout(this.timerID);
    if (e.value !== "" && e.value !== " ") {
      this.timerID = setTimeout(() => {
        this.showLocations(e);
      }, 1000);
    }
    else {
      let array = [];
      this.setState({ locations: array });
    }
  }

  async showLocations(e) {
    let url = new URL("http://api.geonames.org/searchJSON?");
    url.searchParams.set('q', e.value);
    url.searchParams.append('lang', lang.lang);
    url.searchParams.append('maxRows', 50);
    url.searchParams.append('username', 'zboczonyartur');

    const api_call = await fetch(url);
    const response = await api_call.json();
    console.log(response);

    let array = [];
    for (let i = 0; i < response.geonames.length; i++) {
      array.push(
        <div key={i} onClick={() => {
          this.getWeather(
            response.geonames[i].lat,
            response.geonames[i].lng,
            response.geonames[i].toponymName,
            response.geonames[i].adminName1,
            response.geonames[i].countryName
          )
        }}>
          {response.geonames[i].toponymName},&nbsp;
          {response.geonames[i].adminName1},&nbsp;
          {response.geonames[i].countryName}
        </div>
      );
    }
    this.setState({ locations: array });
  }

  showWeather(day) {
    this.setState({
      dayWeather: day
    });
  }

  showActualWeather() {
    this.setState({
      dayWeather: undefined
    });
  }

  changeLanguage() {
    if (localStorage.getItem("lang") === "en") {
      lang = lang_pl;
      localStorage.setItem("lang", "pl");
      this.getWeather(52.229675, 21.012230, "Warszawa", "Województwo mazowieckie", "Polska");
      this.showActualWeather();
    }
    else {
      lang = lang_en;
      localStorage.setItem("lang", "en");
      this.getWeather(51.509865, -0.118092, "London", "England", "United Kingdom");
      this.showActualWeather();
    }
  }

  render() {
    let current = "", hourly = "", daily = "";
    let sunrise = "", sunset = "";
    if (this.state.data !== undefined) {
      current = this.state.data.current;
      hourly = this.state.data.hourly;
      daily = this.state.data.daily;
      sunrise = this.state.data.current.sunrise;
      sunset = this.state.data.current.sunset;
    }

    if (this.state.dayWeather !== undefined) {
      current = this.state.dayWeather;
    }

    return (
      <div>
        <Clock date={this.state.date} sunrise={sunrise} sunset={sunset} onClick={this.showActualWeather} />
        <SearchCity locations={this.state.locations} handleChange={this.handleChange} />
        <div className="language" onClick={this.changeLanguage}>{lang.lang.toUpperCase()}</div>
        <DayDetails current={current} hourly={hourly} />
        <DayWeather daily={daily} onClick={this.showWeather} />
      </div>
    );
  }
}

export default App;
