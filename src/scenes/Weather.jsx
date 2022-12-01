import CurrentWeather from './current-weather/CurrentWeather'
import Forcast from './forcast/Forcast'
import { useEffect, useState } from 'react'

const Weather = () => {

    // Create form data state with an obj and default to empty location string
    const [formData, setFormData] = useState({
        location: "",
    })
    // Update state with the users input
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search Location"
                        onChange={handleChange}
                        name="location"
                        value={formData.location}
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