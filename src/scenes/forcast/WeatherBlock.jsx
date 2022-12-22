import "./forcast.css";
import { BsFillSunFill } from "react-icons/bs";

const WeatherBlock = (props) => {

    const get_dt = props.dt_txt
    const split_dt = get_dt.split(" ")
    const get_time = split_dt[1]
    const time = get_time.slice(0, 5)
    

    return (
        <div className="weather--block">
            <p>{Math.round(props.main.temp)}&#176;</p>
            <p><BsFillSunFill className="icon" /></p>
            <p>{time}</p>
        </div>
    )
}

export default WeatherBlock