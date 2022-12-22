import "./forcast.css";
import { BsFillSunFill } from "react-icons/bs";

const WeatherBlock = (props) => {

    return (
        <div className="weather--block">
            <p>{Math.round(props.main.temp)}&#176;</p>
            <p><BsFillSunFill className="icon" /></p>
            <p>{props.d_or_t}</p>
        </div>
    )
}

export default WeatherBlock