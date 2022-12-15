import CurrentWeather from "./current-weather/CurrentWeather";
import Forcast from "./forcast/Forcast";
import "./styles.css";
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
    const key = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${key}`;
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const weatherDataResponse = await response.json();
      setWeatherData(weatherDataResponse);
    };
    fetchData();
  }, []);
  // GET CURRENT WEATHER & FORCAST WHEN USER SEARCH FOR LOCATION //
  async function getWeather() {
    const key = "";
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
      const lon = weatherDataResponse.coord.lon
      const lat = weatherDataResponse.coord.lat
      // Get forcast data with lon & lat coords
      const forcastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
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
      <div>
        <form className="input--wrapper center">
          <input
            type="text"
            placeholder="Search Location"
            onChange={handleChange}
            name="location"
            value={formData.location}
          />
        </form>
      </div>
      <div>
        <div className="button--search--wrapper">
          <button className="button--search center" onClick={getWeather}>
            get weather
          </button>
        </div>
        {/* <h2>{JSON.stringify(weatherData)}</h2> */}
        {weatherData ? <CurrentWeather weather={weatherData} /> : null}
        {forcastData ? <Forcast forcast={forcastData} /> : null}
      </div>
    </div>
  );
};

export default Weather;
// https://javascript.plainenglish.io/js-fetch-are-you-handling-responses-correctly-1df3246b85af
