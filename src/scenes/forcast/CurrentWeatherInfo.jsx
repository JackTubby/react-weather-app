import "./forcast.css";
import { BsFillSunFill } from "react-icons/bs";

const CurrentWeatherInfo = (props) => {
    return (
                    <div className="today--tab">
            <div className="today--card-wrapper">
                <div className="card--icon"><BsFillSunFill /></div>
                <div className="card--info-wrapper">
                    <div className="info">
                        <p>{props.today.feels_like}&#176;</p>
                        <p>Feels Like</p>
                    </div>
                </div>
            </div>
            <div className="today--card-wrapper">
                <div className="card--icon"><BsFillSunFill /></div>
                <div className="card--info-wrapper">
                    <div className="info">
                        <p>{props.today.wind} mph</p>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
            <div className="today--card-wrapper">
                <div className="card--icon"><BsFillSunFill /></div>
                <div className="card--info-wrapper">
                    <div className="info">
                        <p>{props.today.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
            <div className="today--card-wrapper">
                <div className="card--icon"><BsFillSunFill /></div>
                <div className="card--info-wrapper">
                    <div className="info">
                        <p>{props.today.pressure}%</p>
                        <p>Pressure</p>
                    </div>
                </div>
            </div>
            <div className="today--card-wrapper">
                <div className="card--icon"><BsFillSunFill /></div>
                <div className="card--info-wrapper">
                    <div className="info">
                        <p>{props.today.cloud_type}</p>
                        <p>Cloud Type</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CurrentWeatherInfo