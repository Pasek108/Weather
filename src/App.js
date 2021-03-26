import React from 'react';
import './App.css';

import SearchCity from './components/SearchCity';
import Clock from './components/Clock';
import DayDetails from './components/DayDetails';
import DayWeather from './components/DayWeather';

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
    surise: "wschód słońca",
    sunset: "zachód słońca",
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

export default class App extends React.PureComponent {
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
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("location") === undefined || localStorage.getItem("location") === null) {
      if (localStorage.getItem("lang") === "en") this.getWeather(51.509865, -0.118092, "London", "England", "United Kingdom");
      else this.getWeather(52.229675, 21.012230, "Warszawa", "Województwo mazowieckie", "Polska");
    }
    else {
      const location = localStorage.getItem("location").split(";");
      this.getWeather(location[0], location[1], location[2], location[3], location[4]);
    }

    this.stopWritingTimeoutID = setTimeout(() => { }, 1000);
    this.timeoutID = setTimeout(() => { }, 1000);
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount = () => clearInterval(this.timerID);

  tick = () => this.setState({ date: new Date() });
  showWeather = (day) => this.setState({ dayWeather: day });
  showActualWeather = () => this.setState({ dayWeather: undefined });

  async getWeather(lat, lon, name, adminName, country) {
    let array = [];
    this.setState({ locations: array });

    let x = lat;
    let y = lon;
    document.getElementById("search").value = `${name}, ${adminName}, ${country}`;
    localStorage.setItem("location", `${lat};${lon};${name};${adminName};${country}`);

    let url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.set('lat', x);
    url.searchParams.append('lon', y);
    url.searchParams.append('lang', lang.lang);
    url.searchParams.append('units', 'metric');
    url.searchParams.append('exclude', 'minutely,alerts');
    url.searchParams.append('appid', 'c85db9a25d5b35109ec7aecb2d7ec070');

    const api_call = await fetch(url);
    const response = await api_call.json();

    this.setState({ data: response });
  }

  handleChange(e) {
    clearTimeout(this.timeoutID);
    clearTimeout(this.stopWritingTimeoutID);

    if (e.value.trim() !== "") {
      this.timeoutID = setTimeout(() => {
        this.showLocations(e);
      }, 1000);
    }
    else {
      let array = [];
      this.setState({ locations: array });
      this.handleMouseOut();
    }
  }

  async showLocations(e) {
    let url = new URL("https://secure.geonames.org/searchJSON?");
    url.searchParams.set('q', e.value);
    url.searchParams.append('lang', lang.lang);
    url.searchParams.append('maxRows', 50);
    url.searchParams.append('username', 'zboczonyartur');

    const api_call = await fetch(url);
    const response = await api_call.json();

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

  changeLanguage() {
    const selectedLang = document.getElementsByClassName("language")[0].value;

    if (selectedLang === "pl" && localStorage.getItem("lang") === "en") {
      lang = lang_pl;
      localStorage.setItem("lang", "pl");
      this.getWeather(52.229675, 21.012230, "Warszawa", "Województwo mazowieckie", "Polska");
      this.showActualWeather();
    }
    else if (selectedLang === "en" && localStorage.getItem("lang") === "pl") {
      lang = lang_en;
      localStorage.setItem("lang", "en");
      this.getWeather(51.509865, -0.118092, "London", "England", "United Kingdom");
      this.showActualWeather();
    }
  }

  handleMouseOut() {
    this.stopWritingTimeoutID = setTimeout(() => {
      const location = localStorage.getItem("location").split(";");
      document.getElementById("search").value = `${location[2]}, ${location[3]}, ${location[4]}`;
    }, 4000);
  }

  render() {
    let current = "", hourly = "", daily = "";
    let sunrise = "", sunset = "";
    const data = this.state.data;

    if (data !== undefined) {
      current = data.current;
      hourly = data.hourly;
      daily = data.daily;
      sunrise = data.current.sunrise;
      sunset = data.current.sunset;
    }

    if (this.state.dayWeather !== undefined) {
      current = this.state.dayWeather;
    }

    return (
      <div>
        <div className="header">
          <SearchCity lang={lang}
            locations={this.state.locations}
            handleChange={this.handleChange}
            onMouseOut={this.handleMouseOut} />

          <select className="language" defaultValue={lang.lang} onChange={this.changeLanguage}>
            <option value="pl">PL</option>
            <option value="en">EN</option>
          </select>

        </div>

        <Clock lang={lang}
          date={this.state.date}
          sunrise={sunrise}
          sunset={sunset}
          onClick={this.showActualWeather} />

        <DayDetails lang={lang} current={current} hourly={hourly} />
        <DayWeather lang={lang} daily={daily} onClick={this.showWeather} />
      </div>
    );
  }
}
