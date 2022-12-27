import "./currentWeather.css";
import { CiTempHigh } from "react-icons/ci";

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
  return (
    <div>
      <div className="outer-wrapper">
        <div className="header-wrapper">
          <div className="location">London</div>
          <div className="colour-mode">
            <label class="toggle" for="myToggle">
              <input
                class="toggle-input"
                name=""
                type="checkbox"
                id="myToggle"
              />
              <div class="toggle-fill"></div>
            </label>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="date">Monday, 12 June</div>
          <div className="square">
            <div className="weather-type">Thunderstorm</div>
            <div className="temp">25</div>
          </div>
        </div>
        <div className="extra-wrapper">
          <div className="wind-wrapper">
            <div className="extra-icon">
              <CiTempHigh color="white" />
            </div>
            <div className="extra-text">9mph</div>
            <div className="extra-heading">Wind</div>
          </div>
          <div className="humidity-wrapper">
            <div className="extra-icon">
              <CiTempHigh />
            </div>
            <div className="extra-text">30%</div>
            <div className="extra-heading">Humdidity</div>
          </div>
          <div className="visibility-wrapper">
            <div className="extra-icon">
              <CiTempHigh />
            </div>
            <div className="extra-text">1.4km</div>
            <div className="extra-heading">Visibility</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
