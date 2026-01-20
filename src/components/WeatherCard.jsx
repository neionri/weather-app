import { motion } from 'framer-motion';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind, sys } = data;
  const weatherMain = weather[0].main;
  const weatherDesc = weather[0].description;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);

  // Get weather emoji
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

  // Format time
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      className="weather-card glass hover-lift"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="weather-header">
        <div className="location">
          <h2>📍 {name}</h2>
          <p className="weather-desc">{weatherDesc}</p>
        </div>
        <div className="weather-icon">
          <span className="emoji">{getWeatherEmoji(weatherMain)}</span>
        </div>
      </div>

      <div className="temperature-section">
        <motion.div
          className="temp-main"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <span className="temp-value">{temp}</span>
          <span className="temp-unit">°C</span>
        </motion.div>
        <p className="feels-like">Feels like {feelsLike}°C</p>
      </div>

      <div className="weather-details">
        <motion.div
          className="detail-item glass-light"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="detail-icon">💧</span>
          <div className="detail-info">
            <p className="detail-label">Humidity</p>
            <p className="detail-value">{main.humidity}%</p>
          </div>
        </motion.div>

        <motion.div
          className="detail-item glass-light"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="detail-icon">💨</span>
          <div className="detail-info">
            <p className="detail-label">Wind Speed</p>
            <p className="detail-value">{wind.speed} km/h</p>
          </div>
        </motion.div>

        <motion.div
          className="detail-item glass-light"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="detail-icon">🌡️</span>
          <div className="detail-info">
            <p className="detail-label">Pressure</p>
            <p className="detail-value">{main.pressure} hPa</p>
          </div>
        </motion.div>
      </div>

      <div className="sun-times">
        <div className="sun-item">
          <span>🌅 Sunrise</span>
          <span className="time">{formatTime(sys.sunrise)}</span>
        </div>
        <div className="sun-item">
          <span>🌇 Sunset</span>
          <span className="time">{formatTime(sys.sunset)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
