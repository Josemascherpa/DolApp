import React, { createContext, PropsWithChildren, useEffect, useState, } from 'react';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';


const { LightTheme, DarkTheme } = adaptNavigationTheme( {
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
} );

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    primary: "#ffffff",
    background: "#d7d7d7",
    text: "#000000",
    card: LightTheme.colors.card, 
    border: LightTheme.colors.border,
    notification: LightTheme.colors.notification,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    primary: "#323232",
    background: "#313131",
    text: "#d8d8d8",
    card: DarkTheme.colors.card, 
    border: DarkTheme.colors.border,
    notification: DarkTheme.colors.notification,
  },
};


export const ThemeContext = createContext( {
  isDark: false,
  theme: CombinedDefaultTheme,  
} );




export const ThemeContextProvider = ( { children }: PropsWithChildren ) => {
  
  const colorScheme = useColorScheme();    
  const [isDarkTheme,setIsDarkTheme] = useState(true);
  const [theme,setTheme]=useState(CombinedDefaultTheme)

  useEffect(() => {
    if(colorScheme==="dark"){
      setTheme(CombinedDarkTheme);
      setIsDarkTheme(true);
    }else{
      setTheme(CombinedDefaultTheme);
      setIsDarkTheme(false);
    }
  }, [colorScheme])
  

  

  return (
    <PaperProvider theme={ theme }>
      <NavigationContainer theme={ theme }>
        <ThemeContext.Provider value={ { isDark: isDarkTheme, theme: theme } }>
          { children }
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};