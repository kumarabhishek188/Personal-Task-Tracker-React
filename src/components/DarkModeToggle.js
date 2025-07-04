import React from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={onToggle}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="toggle-icon">
        {isDarkMode ? '☀️' : '🌙'}
      </div>
    </button>
  );
};

export default DarkModeToggle; 