
import { StyleSheet, Text, View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get( 'window' ).width;

const data = {
  labels: Array.from({ length: 20 }, (_, i) => `Label ${i + 1}`), // Asegúrate de tener suficientes etiquetas para hacer scroll
  datasets: [
    {
      data: Array.from({ length: 20 }, (_, i) => Math.random() * 100),
    },
  ],
};

export const GraphDolar = () => {
  return (
    <ScrollView horizontal style={styles.scrollContainer}>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth * 2} // Asegúrate de que el ancho del gráfico sea mayor que el ancho de la pantalla para habilitar el scroll
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  chartContainer: {
    width: screenWidth * 2, // Ajusta el ancho del contenedor para permitir el scroll horizontal
  },
});
