import "../forcast.css";
import "./current.css"
import { CiTempHigh } from "react-icons/ci";
import { BsWind, BsCloudyFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaWeight } from "react-icons/fa"
import{ GrOverview } from "react-icons/gr"

const CurrentWeatherInfo = (props) => {
  return (
    <div className="info--tab">
      <div className="info--card-wrapper">
        <div className="card--icon">
          <CiTempHigh />
        </div>
        <div className="card--info-wrapper">
          <div className="info">
            <p>{Math.round(props.today.feels_like)}&#176;</p>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
      <div className="info--card-wrapper">
        <div className="card--icon">
          <BsWind />
        </div>
        <div className="card--info-wrapper">
          <div className="info">
            <p>
              {props.today.wind}
              <i>mph</i>
            </p>
            <p>Wind</p>
          </div>
        </div>
      </div>
      <div className="info--card-wrapper">
        <div className="card--icon">
          <WiHumidity />
        </div>
        <div className="card--info-wrapper">
          <div className="info">
            <p>{props.today.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
      <div className="info--card-wrapper">
        <div className="card--icon">
          <FaWeight />
        </div>
        <div className="card--info-wrapper">
          <div className="info">
            <p>
              {props.today.pressure}
              <i>mb</i>
            </p>
            <p>Pressure</p>
          </div>
        </div>
      </div>
      <div className="info--card-wrapper">
        <div className="card--icon">
          <BsCloudyFill />
        </div>
        <div className="card--info-wrapper">
          <div className="info">
            <p>{props.today.cloud}</p>
            <p>Cloud Type</p>
          </div>
        </div>
      </div>
      <div className="info--card-wrapper">
        <div className="card--icon">
          <GrOverview />
        </div>
        <div className="card--info-wrapper">
          <div className="info">
            <p>{props.today.visibility / 1000}<i>km</i></p>
            <p>Visibility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;
