import "../forcast.css";
import "./tomorrow.css"
import WeatherBlock from "../WeatherBlock";

const Tomorrow = (props) => {
    const forcasts = props.tomorrowForcast.map(forcast => {
        return (
            <WeatherBlock {...forcast} />
        )
    })
    return (
        <div className="forcast-tab">
            {forcasts}
        </div>
    )
}

export default Tomorrow