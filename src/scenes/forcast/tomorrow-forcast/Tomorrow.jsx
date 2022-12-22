import "../forcast.css";
import "./tomorrow.css"
import WeatherBlock from "../WeatherBlock";

const Tomorrow = (props) => {
    const forcasts = props.tomorrowForcast.map(forcast => {
        const get_dt = forcast.dt_txt
        const split_dt = get_dt.split(" ")
        const get_time = split_dt[1]
        const time = get_time.slice(0, 5)
        return (
            <WeatherBlock {...forcast} d_or_t={time} />
        )
    })
    return (
        <div className="forcast-tab">
            {forcasts}
        </div>
    )
}

export default Tomorrow