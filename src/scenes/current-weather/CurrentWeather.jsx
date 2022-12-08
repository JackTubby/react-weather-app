import './currentWeather.css';
import sunIcon from '../../images/sun-icon.svg';

const CurrentWeather = (props) => {

    // let temp;
    // if (props.weather.main === undefined) {
    //     console.log("yep")
    // } else {
    //     let temp = props ? `${Math.round(props.weather.main.temp)}°` : "16°"
    // }
    return (
        <div>
            {/* Icon top right of screen - vary between current weather */}
            <div className='current-icon-wrapper'>
                <img className='current-icon' src={sunIcon} alt="Kiwi standing on oval"/>
            </div>
            <div className='current-info-wrapper'>
                {/* <h3 className='current-temp'>{`${Math.round(props.weather.main.temp)}°`}</h3> */}
                <h3 className='current-sky'>Cloudy</h3>
                <h2 className='current-location'>Paris, France</h2>
            </div>
        </div>
    )
}

export default CurrentWeather