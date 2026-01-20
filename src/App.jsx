import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ForecastCards from './components/ForecastCards';
import RainEffect from './components/RainEffect';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Jakarta');
  const [weatherType, setWeatherType] = useState('clear');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      console.log('Fetching weather from:', url);
      
      const response = await fetch(url);
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.message || 'City not found');
      }
      
      const data = await response.json();
      console.log('Weather data:', data);
      
      setWeatherData(data);
      setWeatherType(data.weather[0].main.toLowerCase());
      setLoading(false);
      
    } catch (error) {
      console.error('Error fetching weather:', error);
      alert(`Error: ${error.message}\n\nPossible issues:\n1. API key might not be activated yet (wait 10 minutes)\n2. Check your internet connection\n3. City name might be incorrect`);
      setWeatherData(null);
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  return (
    <div className={`app ${weatherType}`}>
      {/* Animated Background */}
      <div className="background-gradient"></div>
      
      {/* Weather Effects */}
      {weatherType === 'rain' && <RainEffect />}
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="app-title gradient-text">
            ☁️ Premium Weather
          </h1>
        </motion.div>

        <SearchBar onSearch={handleSearch} />

        {loading ? (
          <motion.div
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="loading-spinner"></div>
            <p>Loading weather data...</p>
          </motion.div>
        ) : weatherData ? (
          <>
            <WeatherCard data={weatherData} />
            <ForecastCards city={city} />
          </>
        ) : (
          <div className="error-message">
            <p>Unable to fetch weather data. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
