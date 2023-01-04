import "./currentWeather.css";
import { CiTempHigh } from "react-icons/ci";
import { BsWind, BsEye } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaCloudscale } from "react-icons/fa";

const CurrentWeather = (props) => {
  const cloudData = props.weather.clouds.all;
  let clouds;
  if (cloudData > 50) {
    clouds = "Cloudy";
  } else if (cloudData > 10) {
    clouds = "Partially Cloudy";
  } else {
    clouds = "Clear";
  }

  // Turn unix into organised todays date
  const unix_timestamp = props.weather.dt;
  const date = new Date(unix_timestamp * 1000);
  const date_to_string = date.toString();
  const split_date = date_to_string.split(" ");
  const get_day = split_date[0];
  const get_date = split_date[2];
  const get_month = split_date[1];
  const today_date = `${get_day} ${get_date} ${get_month}`;

  return (
    <div>
      <div className="outer-wrapper">
        <div className="header-wrapper">
          <div className="location">{props.weather.name}</div>
          <div className="colour-mode">
            {/* <label className="toggle">
              <input
                className="toggle-input"
                name=""
                type="checkbox"
                id="myToggle"
              />
              <div className="toggle-fill"></div>
            </label> */}
          </div>
        </div>
        <div className="main-wrapper">
          <div className="date">{today_date}</div>
          <div className="square">
            <div className="weather-type">
              {props.weather.weather[0].description}
            </div>
            <div className="temp">{Math.round(props.weather.main.temp)}&#176;</div>
          </div>
        </div>
        <div className="extra-wrapper">
          <div className="feels-wrapper">
            <div className="extra-icon">
              <CiTempHigh />
            </div>
            <div className="extra-text">
              {Math.round(props.weather.main.feels_like)}&#176;
            </div>
            <div className="extra-heading">Feels Like</div>
          </div>
          <div className="wind-wrapper">
            <div className="extra-icon">
              <BsWind />
            </div>
            <div className="extra-text">
              {Math.round(props.weather.wind.speed)}mph
            </div>
            <div className="extra-heading">Wind</div>
          </div>
          <div className="humidity-wrapper">
            <div className="extra-icon">
              <WiHumidity />
            </div>
            <div className="extra-text">{props.weather.main.humidity}%</div>
            <div className="extra-heading">Humdidity</div>
          </div>
          <div className="visibility-wrapper">
            <div className="extra-icon">
              <BsEye />
            </div>
            <div className="extra-text">
              {props.weather.visibility / 1000}km
            </div>
            <div className="extra-heading">Visibility</div>
          </div>
          <div className="pressure-wrapper">
            <div className="extra-icon">
              <FaCloudscale />
            </div>
            <div className="extra-text">{props.weather.main.pressure}mb</div>
            <div className="extra-heading">Pressure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
