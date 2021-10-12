import React from 'react';

export const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    fcolor: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
