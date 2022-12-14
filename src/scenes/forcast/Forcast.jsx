import React, { useState, useEffect } from "react";
import "./forcast.css";

import Today from "./Today";
import Tomorrow from "./Tomorrow";
import SevenDays from "./SevenDays";

const Forcast = (props) => {
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
          Today
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => {
            handleClick(2);
          }}
        >
          Tomorrow
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => {
            handleClick(3);
          }}
        >
          Next 7 Days
        </button>
      </div>
      <div className="forcast-wrapper">
        {activeIndex === 1 ? (
          <Today today={forcastValues.dayOne} locationInfo={forcastValues.locationInfo} />
        ) : activeIndex === 2 ? (
          <Tomorrow tomorrow={forcastValues.dayTwo} locationInfo={forcastValues.locationInfo} />
        ) : (
          <SevenDays fiveDays={forcastValues} />
        )}
      </div>
    </div>
  );
};

export default Forcast;
