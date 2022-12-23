import "../forcast.css";
import "./today.css"
import WeatherBlock from "../weather-block/WeatherBlock";

const Today = (props) => {
    const forcasts = props.todayForcast.map(forcast => {
        let todayObj = {...forcast, identifier: 'today'}
        // Get date
        const get_dt = forcast.dt_txt
        const split_dt = get_dt.split(" ")
        const get_time = split_dt[1]
        const time = get_time.slice(0, 5)
        return (
            <WeatherBlock {...todayObj} d_or_t={time} />
            )
        })

    return (
        <div className="forcast-tab">
            {forcasts}
        </div>
    )
}

export default Today