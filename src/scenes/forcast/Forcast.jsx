import React, { useState, useEffect } from "react";
import "./forcast.css";

import Today from "./Today";
import Tomorrow from "./Tomorrow";
import SevenDays from "./SevenDays";

const Forcast = () => {
  // Create state to change tabs and return an index
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  // COORDS
  const [coords, setCoords] = useState();
  useEffect(() => {
    async function getCoords() {
    const key = "";
    const location = "london";
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`;
      const response = await fetch(url);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const coordsResponse = await response.json();
      setCoords(coordsResponse);
    };
    getCoords();
  }, []);

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
          <Today />
        ) : activeIndex === 2 ? (
          <Tomorrow />
        ) : (
          <SevenDays />
        )}
      </div>
    </div>
  );
};

export default Forcast;
