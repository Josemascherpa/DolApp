import { createStackNavigator } from '@react-navigation/stack';
import { DolarScreen } from '../screens/DolarScreen';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';

export type StackParamList = {    
  DolarScreen: {
    casaDolar: string;
    ventaDolar: string;
    compraDolar: string;
  };
};

const Stack = createStackNavigator<StackParamList>();

export function StackNavigators() {

  const { isDark } = useContext( ThemeContext );

  return (
    <Stack.Navigator screenOptions={ {
      headerTitleAlign: "center",
      headerTitleStyle: {
        justifyContent: "center",
        alignContent: "center",

        color: isDark ? darkColors.text : lightColors.text
      }, headerStyle: {
        backgroundColor: isDark ? darkColors.background : lightColors.background,
      },
    }
    }>
      <Stack.Screen
        name="DolarScreen"
        component={ DolarScreen }        
      />
    </Stack.Navigator>


  );
}