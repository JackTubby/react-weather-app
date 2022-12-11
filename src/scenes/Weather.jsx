import CurrentWeather from './current-weather/CurrentWeather'
import Forcast from './forcast/Forcast'
import './styles.css';
import { useEffect, useState } from 'react'

const Weather = () => {
    // HANDLE FORM
    // Create form data state with an obj and default it to london
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
    // HANDLE API REQ
    const [weatherData, setWeatherData] = useState()
    // Runs the API once on page load to get data to occupy the screen (This will be changed to the users location)
    useEffect(function() {
        const key = process.env.API_KEY;
        const apiKey = key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=manchester&units=metric&appid=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => setWeatherData(data))
    }, [])
    // This is run only when the user adds a location and searches for it
    function callWeather(){
        const key = process.env.API_KEY;
        const apiKey = key
        // Get location from state which is added by user
        let location = formData.location
        // Url for weather req
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => setWeatherData(data))
    }
    return (
        <div>
            <div>
                <form className='input--wrapper center'>
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
                <div className='button--search--wrapper'>
                    <button className='button--search center' onClick={callWeather}>get weather</button>
                </div>
                {/* <h2>{JSON.stringify(weatherData)}</h2> */}
                { weatherData ? <CurrentWeather weather={weatherData} /> : null }
                <Forcast />
            </div>
        </div>
    )
}

export default Weather
// https://javascript.plainenglish.io/js-fetch-are-you-handling-responses-correctly-1df3246b85af