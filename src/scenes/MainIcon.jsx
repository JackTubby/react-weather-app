import "./styles.css";

import sunIcon from "../images/sun-icon.svg";
import cloudIcon from "../images/cloudy-icon.svg";
import rainIcon from "../images/rain-icon.svg";
import thunderIcon from "../images/thunder-icon.svg";

const MainIcon = (props) => {
  return (
    <div className="current-icon-wrapper">
      {props.weather.weather[0].main === "Clear" ? (
        <img className="current-icon" src={sunIcon} alt="Sun Icon" />
      ) : props.weather.weather[0].main === "Rain" ? (
        <img className="current-icon" src={rainIcon} alt="Rain Icon" />
      ) : props.weather.weather[0].main === "Clouds" ? (
        <img className="current-icon" src={cloudIcon} alt="Clouds Icon" />
      ) : props.weather.weather[0].main === "Mist" ? (
        <img className="current-icon" src={cloudIcon} alt="Clouds Icon" />
      ) : (
        <img className="current-icon" src={thunderIcon} alt="Thunder Icon" />
      )}
    </div>
  );
};

export default MainIcon;
