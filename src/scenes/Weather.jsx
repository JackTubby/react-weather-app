import CurrentWeather from './current-weather/CurrentWeather'
import Forcast from './forcast/Forcast'
import { useEffect, useState } from 'react'

const Weather = () => {

    const [formData, setFormData] = useState({
        location: "",
    })
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData)

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