import './currentWeather.css';
import sunIcon from '../../images/sun-icon.svg';

const CurrentWeather = () => {
    return (
        <div>
            {/* Icon top right of screen - vary between current weather */}
            <div className='current-icon-wrapper'>
                <img className='current-icon' src={sunIcon} alt="Kiwi standing on oval"/>
            </div>
            <div className='current-info-wrapper'>
                <h3 className='current-temp'>16&#176;</h3>
                <h3 className='current-sky'>Cloudy</h3>
                <h2 className='current-location'>Paris, France</h2>
            </div>
        </div>
    )
}

export default CurrentWeather