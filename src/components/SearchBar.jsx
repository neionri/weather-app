import { useState } from 'react';
import { motion } from 'framer-motion';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <motion.form
      className="search-bar glass-light"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </motion.form>
  );
};

export default SearchBar;
