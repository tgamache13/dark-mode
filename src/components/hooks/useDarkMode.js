import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [darkMode]);

    const setMode = (darkMode) => {
        setDarkMode(darkMode);
        window.localStorage.setItem(key,  JSON.stringify(darkMode));
    }
    return [darkMode, setMode];
}
export default useDarkMode;
