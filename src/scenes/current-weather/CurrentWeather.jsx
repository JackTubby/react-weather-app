import './currentWeather.css';
import sunIcon from '../../images/sun-icon.svg';

const CurrentWeather = (props) => {

    const cloudData =  props.weather.clouds.all;
    let clouds;
    if(cloudData > 50){
        clouds = "Cloudy"
    } else if(cloudData > 10) {
        clouds = "Partially Cloudy"
    } else {
        clouds = "Clear"
    }
    return (
        <div>
            {/* Icon top right of screen - vary between current weather */}
            <div className='current-icon-wrapper'>
                <img className='current-icon' src={sunIcon} alt="Kiwi standing on oval"/>
            </div>
            <div className='current-info-wrapper'>
                <h3 className='current-temp'>{`${Math.round(props.weather.main.temp)}°`}</h3>
                <h3 className='current-sky'>{clouds}</h3>
                <h2 className='current-location'>{props.weather.name}</h2>
            </div>
        </div>
    )
}

export default CurrentWeather