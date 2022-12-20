import React, { useState, useEffect } from "react";
import "./forcast.css";

import Info from "./current-weather-info/CurrentWeatherInfo"
import Today from "./today-forcast/Today";
import Tomorrow from "./tomorrow-forcast/Tomorrow";
import SevenDays from "./five-day-forcast/SevenDays";

const Forcast = (props) => {

  // Loop over the array and get each item
  function checkDates() {
    const forcastArray = props.forcast.list // Get all array
    const date = new Date(); // Get current date
    const date1 = date.getDate(); // Get just todays date
    forcastArray.forEach(forcast => {
      let get_current_dt = forcast.dt_txt // Get current dt
      let split_dt = get_current_dt.split(" ") // Split d & t at the space
      let get_full_date = split_dt[0] // Get just the date
      let get_date = get_full_date.slice(8) // Remove year & month and get just date
      if( get_date ==  date1){
        console.log("YEP")
      } else {
        console.log("Nope")
      }
    })
  }

  const forcastValues = {
    locationInfo: {
      sunrise: props.forcast.city.sunrise,
      sunset: props.forcast.city.sunset,
      location: props.forcast.city.name,
    },
    dayOne: {
      temp: props.forcast.list[0].main.temp,
      feels_like: props.forcast.list[0].main.feels_like,
      humidity: props.forcast.list[0].main.humidity,
      pressure: props.forcast.list[0].main.pressure,
      wind: props.forcast.list[0].wind.speed,
      cloud: props.forcast.list[0].weather[0].main,
      cloud_type: props.forcast.list[0].weather[0].description,
      date_time: props.forcast.list[0].dt_txt,
      visibility: props.forcast.list[0].visibility,
    },
    dayTwo: {
      temp: props.forcast.list[8].main.temp,
      feels_like: props.forcast.list[8].main.feels_like,
      humidity: props.forcast.list[8].main.humidity,
      pressure: props.forcast.list[8].main.pressure,
      wind: props.forcast.list[8].wind.speed,
      cloud: props.forcast.list[8].weather[0].main,
      cloud_type: props.forcast.list[8].weather[0].description,
      date_time: props.forcast.list[8].dt_txt,
      visibility: props.forcast.list[8].visibility,
    },
    dayThree: {
      temp: props.forcast.list[16].main.temp,
      feels_like: props.forcast.list[16].main.feels_like,
      humidity: props.forcast.list[16].main.humidity,
      pressure: props.forcast.list[16].main.pressure,
      wind: props.forcast.list[16].wind.speed,
      cloud: props.forcast.list[16].weather[0].main,
      cloud_type: props.forcast.list[16].weather[0].description,
      date_time: props.forcast.list[16].dt_txt,
      visibility: props.forcast.list[16].visibility,
    },
    dayFour: {
      temp: props.forcast.list[24].main.temp,
      feels_like: props.forcast.list[24].main.feels_like,
      humidity: props.forcast.list[24].main.humidity,
      pressure: props.forcast.list[24].main.pressure,
      wind: props.forcast.list[24].wind.speed,
      cloud: props.forcast.list[24].weather[0].main,
      cloud_type: props.forcast.list[24].weather[0].description,
      date_time: props.forcast.list[24].dt_txt,
      visibility: props.forcast.list[24].visibility,
    },
    dayFive: {
      temp: props.forcast.list[32].main.temp,
      feels_like: props.forcast.list[32].main.feels_like,
      humidity: props.forcast.list[32].main.humidity,
      pressure: props.forcast.list[32].main.pressure,
      wind: props.forcast.list[32].wind.speed,
      cloud: props.forcast.list[32].weather[0].main,
      cloud_type: props.forcast.list[32].weather[0].description,
      date_time: props.forcast.list[32].dt_txt,
      visibility: props.forcast.list[32].visibility,
    },
  }

  // Create state to change tabs and return an index
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => {
            handleClick(1);
          }}
        >
          More Info
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => {
            handleClick(2);
          }}
        >
          Today
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => {
            handleClick(3);
          }}
        >
          Tomorrow
        </button>
        <button
          className={`tab ${checkActive(4, "active")}`}
          onClick={() => {
            handleClick(4);
          }}
        >
          Next 7 Days
        </button>
      </div>
      <div className="forcast-wrapper">
        {activeIndex === 1 ? (
          <Info today={forcastValues.dayOne} locationInfo={forcastValues.locationInfo} />
          ) : activeIndex === 2 ? (
          <Today />
          ) : activeIndex === 3 ? (
          <Tomorrow tomorrow={forcastValues.dayTwo} locationInfo={forcastValues.locationInfo} />
          ) : (
          <SevenDays fiveDays={forcastValues} /> 
        )
        }
      </div>
    </div>
  );
};

export default Forcast;
