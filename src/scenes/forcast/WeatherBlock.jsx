import "./forcast.css";
import { BsFillSunFill } from "react-icons/bs";

const WeatherBlock = () => {
    return (
        <div className="weather-block">
            <p><BsFillSunFill /></p>
            <p>30&#176;</p>
            <p>12AM</p>
        </div>
    )
}

export default WeatherBlock