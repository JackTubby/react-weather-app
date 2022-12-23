import React, { useState, useEffect } from "react";

import "../forcast.css";
import "./weatherblock.css"
import { BsFillSunFill } from "react-icons/bs";

const WeatherBlock = (props) => {

    const [checkIfDateOrTime, setCheckIfDateOrTime] = useState(props)
    useEffect(function () {
        if ( props.identifier == "fiveDay" ) {
            const get_day = props.d_or_t
            const second_char = props.d_or_t.charAt(1)
            if (second_char == 1) {
                setCheckIfDateOrTime({...props, d_or_t: `${get_day}st`})            
            }
            else if (second_char == 2) {
                setCheckIfDateOrTime({...props, d_or_t: `${get_day}nd`})
            }
            else if (second_char == 3) {
                setCheckIfDateOrTime({...props, d_or_t: `${get_day}rd`})
            }
            else {
                setCheckIfDateOrTime({...props, d_or_t: `${get_day}th`})
            }
        }
      }, []);
    return (
        <div className="weather--block">
            <p>{Math.round(props.main.temp)}&#176;</p>
            <p><BsFillSunFill className="icon" /></p>
            <p>{checkIfDateOrTime.time}</p>
            <p>{checkIfDateOrTime.d_or_t}</p>
        </div>
    )
}

export default WeatherBlock