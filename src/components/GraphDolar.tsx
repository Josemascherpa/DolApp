
import { StyleSheet, Text, View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';

const screenWidth = Dimensions.get( 'window' ).width;


interface DataProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
    }[];
  };
}

export const GraphDolar = ( { data }: DataProps ) => {
  const { isDark } = useContext( ThemeContext );

  return (
    <ScrollView horizontal style={ styles.scrollContainer }>

      <View style={ styles.chartContainer }>

        <LineChart
          data={ data }
          width={ screenWidth * 8 } // Asegúrate de que el ancho del gráfico sea mayor que el ancho de la pantalla para habilitar el scroll
          height={ 220 }
          chartConfig={ {
            backgroundColor: isDark ? darkColors.containers : lightColors.containers,
            backgroundGradientFrom: isDark ? darkColors.containers : lightColors.containers,
            backgroundGradientTo: isDark ? darkColors.containers : lightColors.containers,
            decimalPlaces: 2,
            color: ( opacity = 1 ) => `rgba(${ isDark ? '255, 255, 255' : '0, 0, 0' }, ${ opacity })`,
            labelColor: ( opacity = 1 ) => `rgba(${ isDark ? '255, 255, 255' : '0, 0, 0' }, ${ opacity })`,
            style: {
              borderRadius: 16,
            },
          } }

          style={ {
            marginVertical: 8,
            borderRadius: 16,
          } }
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  scrollContainer: {
    flex: 1,
  },
  chartContainer: {
    width: screenWidth * 8, // Adjust container width for horizontal scroll
    position: 'relative',
  },

} );