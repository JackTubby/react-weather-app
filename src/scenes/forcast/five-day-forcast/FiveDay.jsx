import "../forcast.css";
import "./fiveday.css"
import WeatherBlock from "../WeatherBlock";

const FiveDay = (props) => {
    const forcasts = props.fiveDays.map(forcast => {
        const get_dt = forcast.dt_txt
        const split_dt = get_dt.split(" ")
        const get_date = split_dt[0]
        const date = get_date.slice(8)
        console.log(date)
        return (
            <WeatherBlock {...forcast} d_or_t={date} />
            )
        })
    return (
        <div className="forcast-tab">
            {forcasts}
        </div>
    )
}

export default FiveDay