import React, { useState, useEffect } from "react";
import { BsFillCloudyFill, BsFillCloudRainFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { BsFillCloudFogFill } from "react-icons/bs";

import "../forcast.css";
import "./weatherblock.css";

const WeatherBlock = (props) => {
  const [checkIfDateOrTime, setCheckIfDateOrTime] = useState(props);
  useEffect(function () {
    if (props.identifier == "fiveDay") {
      const get_day = props.d_or_t;
      const second_char = props.d_or_t.charAt(1);
      if (second_char == 1) {
        setCheckIfDateOrTime({ ...checkIfDateOrTime, d_or_t: `${get_day}st` });
      } else if (second_char == 2) {
        setCheckIfDateOrTime({ ...checkIfDateOrTime, d_or_t: `${get_day}nd` });
      } else if (second_char == 3) {
        setCheckIfDateOrTime({ ...checkIfDateOrTime, d_or_t: `${get_day}rd` });
      } else {
        setCheckIfDateOrTime({ ...checkIfDateOrTime, d_or_t: `${get_day}th` });
      }
    }
  }, []);

  return (
    <div className="weather--block">
      <p>{Math.round(props.main.temp)}&#176;</p>
      {/* <p><BsFillSunFill className="icon" /></p> */}
      <div className="current-icon-wrapper mobile-current-icon">

      {
      props.weather[0].main === "Clear" ? (
        <IoIosSunny />
      ) : props.weather[0].main === "Rain" ? (
        <BsFillCloudRainFill/>
      ) : props.weather[0].main === "Clouds" ? (
        <BsFillCloudyFill />
      ) : props.weather[0].main === "Mist" ? (
        <BsFillCloudFogFill />
      ) : (
        <BsFillCloudyFill />
      )}

      </div>
      <p>{checkIfDateOrTime.time}</p>
      <p>{checkIfDateOrTime.d_or_t}</p>
    </div>
  );
};

export default WeatherBlock;
