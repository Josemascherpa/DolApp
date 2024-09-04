
import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useContext } from 'react';
import { Pressable, View } from 'react-native';
import { darkColors, globalStyles, lightColors } from '../themes/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';



export const HistoryScreen = () => {
  const navigation = useNavigation();
  const { isDark } = useContext( ThemeContext );


  useFocusEffect(
    useCallback( () => {
      navigation.setOptions( {
        headerLeft: () => (
          <Button
            style={ { padding: 5 } }
            onPress={ () => navigation.dispatch( DrawerActions.openDrawer ) }
            textColor={ isDark ? darkColors.text : lightColors.text }
          >
            Menu
            {/* Icono */ }
          </Button>

        ),
      } );
    }, [ isDark, navigation ] )
  );

  return (
    <View style={ [ globalStyles.containerView, {} ] }>

    </View>
  );
};