import React from "react"
import "./App.css"

import SearchCity from "./components/SearchCity"
import Clock from "./components/Clock"
import DayDetails from "./components/DayDetails"
import Forecast from "./components/Forecast"

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)

    let lang = lang_pl
    if (localStorage.getItem("lang") === "en") lang = lang_en
    else localStorage.setItem("lang", "pl")

    this.state = {
      weather_data: undefined,
      displayed_weather: undefined,
      locations: [],
      lang: lang,
    }

    this.searchChange = this.searchChange.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  componentDidMount() {
    let is_location_null = localStorage.getItem("location") == null

    if (is_location_null && this.state.lang.lang === "en") this.getWeather(51.509865, -0.118092, "London", "England", "United Kingdom")
    if (is_location_null && this.state.lang.lang === "pl") this.getWeather(52.229675, 21.01223, "Warszawa", "Województwo mazowieckie", "Polska")
    else {
      const location = localStorage.getItem("location").split(";")
      this.getWeather(location[0], location[1], location[2], location[3], location[4])
    }
  }

  async getWeather(lat, lon, name, adminName, country) {
    this.setState({ locations: [] })

    let x = lat
    let y = lon
    document.querySelector(".search").value = `${name}, ${adminName}, ${country}`
    localStorage.setItem("location", `${lat};${lon};${name};${adminName};${country}`)

    let url = new URL("https://api.openweathermap.org/data/2.5/onecall")
    url.searchParams.set("lat", x)
    url.searchParams.append("lon", y)
    url.searchParams.append("lang", localStorage.getItem("lang"))
    url.searchParams.append("units", "metric")
    url.searchParams.append("exclude", "minutely,alerts")
    url.searchParams.append("appid", "c85db9a25d5b35109ec7aecb2d7ec070")

    const api_call = await fetch(url)
    const response = await api_call.json()

    this.setState({ weather_data: response })
  }

  searchChange() {
    const value = document.querySelector(".search").value.trim()

    if (value !== "") this.showLocations(value)
    else this.setState({ locations: [] })
  }

  resetSearch(e) {
    if (e.target.classList.contains("search") || e.target.classList.contains("location")) return

    this.setState({ locations: [] })
    const location = localStorage.getItem("location").split(";")
    document.querySelector(".search").value = `${location[2]}, ${location[3]}, ${location[4]}`
  }

  async showLocations(value) {
    let url = new URL("https://secure.geonames.org/searchJSON?")
    url.searchParams.set("q", value)
    url.searchParams.append("lang", this.state.lang.lang)
    url.searchParams.append("maxRows", 50)
    url.searchParams.append("username", "zboczonyartur")

    const api_call = await fetch(url)
    const response = await api_call.json()

    let array = []
    for (let i = 0; i < response.geonames.length; i++) {
      array.push(
        <div
          key={i}
          className="location"
          onClick={() => {
            this.getWeather(response.geonames[i].lat, response.geonames[i].lng, response.geonames[i].toponymName, response.geonames[i].adminName1, response.geonames[i].countryName)
          }}
        >
          {response.geonames[i].toponymName},&nbsp;
          {response.geonames[i].adminName1},&nbsp;
          {response.geonames[i].countryName}
        </div>
      )
    }

    this.setState({ locations: array })
  }

  changeLanguage() {
    const selectedLang = document.querySelector(".language").value

    if (selectedLang === "pl" && localStorage.getItem("lang") === "en") {
      this.setState({ lang: lang_pl })
      localStorage.setItem("lang", "pl")
      this.getWeather(52.229675, 21.01223, "Warszawa", "Województwo mazowieckie", "Polska")
    } else if (selectedLang === "en" && localStorage.getItem("lang") === "pl") {
      this.setState({ lang: lang_en })
      localStorage.setItem("lang", "en")
      this.getWeather(51.509865, -0.118092, "London", "England", "United Kingdom")
    }

    this.setState({ displayed_weather: null })
  }

  render() {
    let current = ""
    let daily = ""
    const weather_data = this.state.weather_data

    if (weather_data != null) {
      current = weather_data.current
      daily = weather_data.daily
    }

    if (this.state.displayed_weather != null) current = this.state.displayed_weather

    return (
      <main onClick={this.resetSearch}>
        <header>
          <SearchCity lang={this.state.lang} locations={this.state.locations} searchChange={this.searchChange} />

          <select className="language blur" defaultValue={this.state.lang.lang} onChange={this.changeLanguage}>
            <option value="pl">PL</option>
            <option value="en">EN</option>
          </select>
        </header>

        <div className="main-content">
          <DayDetails lang={this.state.lang} current={current} />
          <Clock lang={this.state.lang} sunrise={weather_data?.current.sunrise} sunset={weather_data?.current.sunset} onClick={() => this.setState({ displayed_weather: null })} />
        </div>

        <Forecast lang={this.state.lang} daily={daily} onClick={(day) => this.setState({ displayed_weather: day })} />
      </main>
    )
  }
}

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
    day_names: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
  },
}

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
    actual_time: "Current time",
    show_actual_weather: "Show current weather",
    surise: "sunrise",
    sunset: "sunset",
    now: "Now",
    day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
}
