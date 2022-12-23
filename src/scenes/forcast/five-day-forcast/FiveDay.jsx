import React, { useState } from "react";
import "../forcast.css";
import "./fiveday.css"
import WeatherBlock from "../WeatherBlock";

const FiveDay = (props) => {

    const forcasts = props.fiveDays.map(forcast => {
        let fiveDayObj = {...forcast, identifier: 'fiveDay'}
        // Get date
        const get_dt = forcast.dt_txt
        const split_dt = get_dt.split(" ")
        const get_date = split_dt[0]
        const get_time = split_dt[1]
        const day = get_date.slice(8)
        return (
            <WeatherBlock {...fiveDayObj} d_or_t={day} time={get_time} />
            )
        })
    return (
        <div className="forcast-tab">
            {forcasts}
        </div>
    )
}

export default FiveDay