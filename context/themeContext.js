import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        textColor: '#000000',
        backgroundColor: '#f8f8f8',
        cardBackgroundColor: '#fff',//#0000000
        nameText: '#333',//#f8f8f8
        descriptionText: "#666",//#999
        priceText: '#000',//#fff
    });

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
