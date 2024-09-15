import React, { useState } from 'react';
import './Weather.css'; // Import the CSS file
// Toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '004da6da9b92080939d11aa56b70fc73';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    city: 'Peshawar',
    country: 'PK',
    temp: "...",
    condition: '...',
    icon: '50d'
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const getWeatherData = async (city) => {
    setLoading(true); // Set loading to true when starting the fetch
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'City not found');
      }
      const data = await response.json();
      setWeather({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        condition: data.weather[0].main,
        icon: data.weather[0].icon
      });
      toast.success(`${data.name} weather display successfully!`); // Success message
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast.error(`Error: ${error.message}`); // Error message
    } finally {
      setLoading(false); // Set loading to false once the fetch is done
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city !== '') {
      getWeatherData(city);
    }
    setCity('');
  };

  return (
    <>
      <ToastContainer />
      <div className="weather-container">
        <h1 className="weather-title">Simple Weather App</h1>
        
        <form onSubmit={handleSubmit} className="weather-form">
          <input 
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter city" 
            className="weather-input" 
          />
          <button 
            type="submit" 
            className="weather-button"
          > 
            Submit
          </button>
        </form>
        
        {loading ? (
          <div className="loading-container">
            <img 
              src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" 
              alt="Loading..." 
              className="loading-gif" 
            />
          </div>
        ) : (
          <div className="weather-info">
            <h3 className="weather-location">
              {weather.city} <span className="weather-country">{weather.country}</span>
            </h3>
            <h2 className="weather-temp">{weather.temp}°C</h2>
            <img 
              src={`http://openweathermap.org/img/w/${weather.icon}.png`} 
              alt={`${weather.condition} icon`} 
              className="weather-icon" 
            />
            <p className="weather-condition">{weather.condition}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
