// App.js

import React from 'react';
import { useDarkMode } from './CustomHooks';

function CustomHook() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div className={`CustomHook ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Dark Mode Toggle</h1>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </div>
  );
}

export default CustomHook;
