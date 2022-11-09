import React, { useState } from "react";
import "./styles.css";

import Today from './forcast/Today';
import Tomorrow from './forcast/Tomorrow';
import SevenDays from './forcast/SevenDays';

const Forcast = () => {
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
          onClick={() => {handleClick(1);}}
        >
          Today
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => {handleClick(2);}}
        >
          Tomorrow
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => {handleClick(3);}}
        >
          Next 7 Days
        </button>
      </div>
      {
          activeIndex === 1 ? <Today/> :
          activeIndex === 2 ? <Tomorrow /> :
          <SevenDays/>
        }
    </div>
  );
};

export default Forcast;
