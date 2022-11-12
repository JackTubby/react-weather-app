import CurrentWeather from './current-weather/CurrentWeather'
import Forcast from './forcast/Forcast'

const Weather = () => {
    return (
        <div>
            <div>
                <form>
                    <input
                        type="text"
                        name="location"
                        value="Search Location"
                    />
                </form>
            </div>
            <div>
                <h1>Weather App</h1>
                <CurrentWeather />
                <Forcast />
            </div>
        </div>
    )
}

export default Weather