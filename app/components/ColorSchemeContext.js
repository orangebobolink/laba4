// ColorSchemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }) => {
    const [colorScheme, setColorScheme] = useState('light');

    const setCustomColorScheme = (customColorScheme) => {
        setColorScheme(customColorScheme);
    };

    return (
        <ColorSchemeContext.Provider value={{ colorScheme, setCustomColorScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};

export const useCustomColorScheme = () => {
    return useContext(ColorSchemeContext);
};
