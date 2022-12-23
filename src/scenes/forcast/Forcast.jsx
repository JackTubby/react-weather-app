import React, { useState, useEffect } from "react";
import "./forcast.css";

import Info from "./current-weather-info/CurrentWeatherInfo"
import Today from "./today-forcast/Today";
import Tomorrow from "./tomorrow-forcast/Tomorrow";
import FiveDay from "./five-day-forcast/FiveDay";

const Forcast = (props) => {

/// TODAYS FORCAST
// Init state to an empty array
const [todayForcast, setTodayForcast] = useState([])
useEffect(function () {
  const forcastArray = props.forcast.list // Get array containing all forcasts
  const date = new Date(); // Get current date
  const date1 = date.getDate(); // Get just todays date
  // We need to initialize the array outside of the loop, otherwise it gets overwritten
  // each iteration and we're back at square one.
  const newTodayForecasts = []; 
  // Loop over the array and get each item
  forcastArray.forEach(forcast => {
    let get_current_dt = forcast.dt_txt // Get d & t from the obj
    let split_dt = get_current_dt.split(" ") // Split d & t at the space
    let get_full_date = split_dt[0] // Get just the date
    let get_date = get_full_date.slice(8) // Remove year & month and get just day
    if( get_date ==  date1){
        // Append the current forcast to the newForescasts array defined earlier
        newTodayForecasts.push(forcast);
    }
  })
    // After the loop is finished, set the state to the newForecasts
    setTodayForcast(newTodayForecasts)
}, []);

/// TOMORROWS FORCAST
const [tomorrowForcast, setTomorrowForcast] = useState([])
useEffect(function () {
  const forcastArray = props.forcast.list
  const date = new Date();
  const date1 = date.getDate();
  const date2 = date1 + 1
  const newTomorrowForecasts = []; 
  forcastArray.forEach(forcast => {
    let get_current_dt = forcast.dt_txt
    let split_dt = get_current_dt.split(" ")
    let get_full_date = split_dt[0]
    let get_date = get_full_date.slice(8)
    if( get_date ==  date2){     
        newTomorrowForecasts.push(forcast);
    }
  })
    setTomorrowForcast(newTomorrowForecasts)
}, []);
/// NEXT 5 DAYS FORCAST
const [nextFiveForcast, setNextFiveForcast] = useState([])
useEffect(function () {
  const forcastArray = props.forcast.list
  const night_time = "00:00:00"
  const day_time = "12:00:00"
  const newFiveDayForecasts = []; 
  forcastArray.forEach(forcast => {
    let get_current_dt = forcast.dt_txt
    let split_dt = get_current_dt.split(" ")
    let get_full_time = split_dt[1]
    if( get_full_time ==  night_time ){
        newFiveDayForecasts.push(forcast);
    }
    if ( get_full_time ==  day_time ){
      newFiveDayForecasts.push(forcast);
    }
  })
    setNextFiveForcast(newFiveDayForecasts)
}, []);

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
          <Info />
          ) : activeIndex === 2 ? (
          <Today todayForcast={todayForcast} />
          ) : activeIndex === 3 ? (
          <Tomorrow tomorrowForcast={tomorrowForcast} />
          ) : (
          <FiveDay fiveDays={nextFiveForcast} /> 
        )
        }
      </div>
    </div>
  );
};

export default Forcast;
