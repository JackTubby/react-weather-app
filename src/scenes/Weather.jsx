import CurrentWeather from "./current-weather/CurrentWeather";
import Forcast from "./forcast/Forcast";
import "./styles.css";
import sunIcon from "../images/sun-icon.svg";
import { useEffect, useState } from "react";

const Weather = () => {
  // HANDLE FORM //
  // Create form data state with defaulted obj
  const [formData, setFormData] = useState({
    location: "",
  });
  // Update state with the users input
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  // API CALLS //
  // Create state which will hold api called data
  const [weatherData, setWeatherData] = useState();
  const [forcastData, setForcastData] = useState();
  // PAGE LOAD CURRENT WEATHER REQ //
  // Runs the API once on page load to get data to occupy the screen (This will be changed to the users location in future update)
  useEffect(function () {
    // Because this is just a front-end application keys are on show. Best practice is to hide these keys but due to the type of project and the limitations of the key
    // I have chosen not to setup a backend to hide them.
    // The key has a limit of 60 calls/minute & 1,000,000 calls/month.
    const key = "3a52db80030a5d5c497398f8e877305e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${key}`;
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const weatherDataResponse = await response.json();
      setWeatherData(weatherDataResponse);
      // Get lon & lat from the previous fetch
      const lon = weatherDataResponse.coord.lon;
      const lat = weatherDataResponse.coord.lat;
      // Get forcast data with lon & lat coords
      const forcastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
      const forcastWeatherResponse = await fetch(forcastWeatherUrl);
      if (!forcastWeatherResponse.ok) {
        const message = `An error has occured: ${forcastWeatherResponse.status}`;
        throw new Error(message);
      }
      const forcastDataResponse = await forcastWeatherResponse.json();
      // Update state with the forcast data
      setForcastData(forcastDataResponse);
    };
    fetchData();
  }, []);
  // GET CURRENT WEATHER & FORCAST WHEN USER SEARCH FOR LOCATION //
  async function getWeather() {
    const key = "3a52db80030a5d5c497398f8e877305e";
    // Get location by user
    let location = formData.location;
    // Url for current weather
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;
    // Get the current weather
    const currentWeatherResponse = await fetch(currentWeatherUrl);
    if (!currentWeatherResponse.ok) {
      // Return this message if an error
      const message = `An error has occured: ${currentWeatherResponse.status}`;
      throw new Error(message);
    }
    const weatherDataResponse = await currentWeatherResponse.json();
    // Update state with data
    setWeatherData(weatherDataResponse);
    // Get lon & lat from the previous fetch
    const lon = weatherDataResponse.coord.lon;
    const lat = weatherDataResponse.coord.lat;
    // Get forcast data with lon & lat coords
    const forcastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
    const forcastWeatherResponse = await fetch(forcastWeatherUrl);
    if (!forcastWeatherResponse.ok) {
      const message = `An error has occured: ${forcastWeatherResponse.status}`;
      throw new Error(message);
    }
    const forcastDataResponse = await forcastWeatherResponse.json();
    // Update state with the forcast data
    setForcastData(forcastDataResponse);
  }
  return (
    <div>
      <div className="outter-wrapper">
        <div className="search-wrapper">
          <div className="input-wrapper">
            <form className="center">
              <input
                className="input-weather"
                type="text"
                placeholder="Search Location"
                onChange={handleChange}
                name="location"
                value={formData.location}
              />
            </form>
          </div>
          <div className="button-search-wrapper">
            <button className="button--search center" onClick={getWeather}>
              get weather
            </button>
          </div>
        </div>
      </div>
      {weatherData ? <CurrentWeather weather={weatherData} /> : null}
      {forcastData ? (
        <Forcast weather={weatherData} forcast={forcastData} />
      ) : null}
      <div className="current-icon-wrapper">
        <img
          className="current-icon"
          src={sunIcon}
          alt="Kiwi standing on oval"
        />
      </div>
    </div>
  );
};

export default Weather;
// https://javascript.plainenglish.io/js-fetch-are-you-handling-responses-correctly-1df3246b85af
