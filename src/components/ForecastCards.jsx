import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ForecastCards.css';

const ForecastCards = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherEmoji = (type) => {
    const emojis = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Drizzle: '🌦️',
      Thunderstorm: '⛈️',
      Snow: '❄️',
      Mist: '🌫️',
      Fog: '🌫️'
    };
    return emojis[type] || '🌤️';
  };

  const fetchForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) return;
      
      const data = await response.json();
      
      // Get one forecast per day (every 8th item = 24 hours)
      const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 7);
      
      const formatted = dailyForecasts.map(item => {
        const date = new Date(item.dt * 1000);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        return {
          day: days[date.getDay()],
          temp: Math.round(item.main.temp),
          icon: getWeatherEmoji(item.weather[0].main),
          desc: item.weather[0].description
        };
      });
      
      setForecastData(formatted);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, [city]);

  return (
    <div className="forecast-section">
      <h3 className="forecast-title">7-Day Forecast</h3>
      <div className="forecast-grid">
        {forecastData.map((day, index) => (
          <motion.div
            key={`${day.day}-${index}`}
            className="forecast-card glass-light hover-lift"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="forecast-day">{day.day}</p>
            <span className="forecast-icon">{day.icon}</span>
            <p className="forecast-temp">{day.temp}°C</p>
            <p className="forecast-desc">{day.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCards;
