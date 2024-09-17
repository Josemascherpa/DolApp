
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useContext, useState } from 'react';
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
  const [ containerHeight, setContainerHeight ] = useState<number>( 250 ); // numero default, luego se calcula con el onlayout del view


  return (
    <ScrollView horizontal style={ [ styles.scrollContainer, ] } key={ isDark ? "dark" : "light" }>

      <View style={ styles.chartContainer }
        onLayout={ ( event ) => {
          const { height } = event.nativeEvent.layout;
          setContainerHeight( height ); // seteo la altura
        } }

      >

        <LineChart
          data={ data }
          width={ screenWidth * 8 } // el ancoh tiene ser mayor que la screen para scrollearrr
          height={ containerHeight-13 }
          chartConfig={ {
            backgroundColor: isDark ? darkColors.containers : lightColors.containers,
            backgroundGradientFrom: isDark ? darkColors.containers : lightColors.containers,
            backgroundGradientTo: isDark ? darkColors.containers : lightColors.containers,
            decimalPlaces: 2,
            color: ( opacity = 1 ) => `rgba(${ isDark ? '255, 255, 255' : '0, 0, 0' }, ${ opacity })`,
            labelColor: ( opacity = 1 ) => `rgba(${ isDark ? '255, 255, 255' : '0, 0, 0' }, ${ opacity })`,
            style: {
              borderRadius: 16,
              flex: 1,
              paddingBottom:10
            },
          } }

          style={ {
            marginVertical: 8,
            borderRadius: 16,
          } }
          renderDotContent={ ( { x, y, index } ) => (
            <Text key={ index } style={ [ styles.dotLabel, { left: x, top: y - 20, color: isDark ? darkColors.text : lightColors.text } ] }>
              { data.datasets[ 0 ].data[ index ] }
            </Text>
          ) }
        />

      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create( {
  scrollContainer: {
    flex: 1,    
  },
  chartContainer: {
    width: screenWidth * 8, //mismo ancho
    position: 'relative',
    flex: 1
  },
  dotLabel: {
    position: 'absolute',
    fontSize: 10,
  },

} );