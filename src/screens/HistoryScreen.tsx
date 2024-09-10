
import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { darkColors, globalStyles, lightColors } from '../themes/theme';

import { Button, Text } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';

import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get( 'window' ).width;

interface DotContentProps {
  x: number;
  y: number;
  index: number;
}

export const HistoryScreen = () => {
  const navigation = useNavigation();
  const { isDark } = useContext( ThemeContext );
  const screenWidth = Dimensions.get( 'window' ).width;

  const data = {
    labels: [ "January", "February", "March", "April", "May", "June", "July" ],
    datasets: [
      {
        data: [ 20, 45, 28, 80, 99, 43, 50 ]
      }
    ]
  };

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
  // Función para renderizar los valores en cada punto;
  const renderDotContent = ( { x, y, index }:DotContentProps ) => (
    <Text
      key={ index }
      style={ {
        position: 'absolute',
        top: y - 18, // Ajusta la posición vertical
        left: x - 10, // Ajusta la posición horizontal
        color: 'white',
        fontSize: 10,        
      } }
    >
      { data.datasets[ 0 ].data[ index ].toFixed( 2 ) }
    </Text>
  );

  return (

    <View style={ styles.container }>
      <Text>hola</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={ styles.scrollContainer }>
        <View style={ styles.chartWrapper }>
          <LineChart
            data={ data }
            width={ screenWidth * 2 } // Asegúrate de que el ancho del gráfico sea mayor que el ancho de la pantalla
            height={ 220 }
            chartConfig={ {
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: ( opacity = 1 ) => `rgba(255, 255, 255, ${ opacity })`,
              labelColor: ( opacity = 1 ) => `rgba(255, 255, 255, ${ opacity })`,
              style: {
                borderRadius: 16,
              },
            } }
            bezier
            withDots={ true } // Activa los puntos
            renderDotContent={ renderDotContent } // Muestra los valores en los puntos
            style={ styles.chart }
          />
        </View>
      </ScrollView>
      <Text>hola</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  chartWrapper: {
    width: screenWidth * 2, // Ajusta el ancho del contenedor del gráfico
  },
  chart: {
    borderRadius: 16,
  },
} );