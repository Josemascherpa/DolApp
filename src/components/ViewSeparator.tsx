import React, { useContext } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors, ThemeColors } from '../themes/theme';
import { MD3LightTheme } from 'react-native-paper';

interface DolarInfoGridProps {
  venta: string;
  compra: string;
}

export const ViewSeparator = ( { venta, compra }: DolarInfoGridProps ) => {
  const { isDark } = useContext( ThemeContext );
  
  return (
    <View style={ styles.container }>
      {/* fila strings */}
      <View style={
        [ styles.row, {
          backgroundColor: isDark ? darkColors.background : lightColors.background,
        }
        ] }>
        <Text style={ [ styles.label, { paddingRight: 50, color: isDark ? darkColors.text : lightColors.text } ] }>
          Venta
        </Text>
        <Text style={ [ styles.label, { paddingLeft: 50, color: isDark ? darkColors.text : lightColors.text } ] }>
          Compra
        </Text>
      </View>

{/* fila valores */}
      <View style={ styles.row }>
        <View style={ styles.valueContainer }>
          <Text style={ [ styles.value, { paddingRight: 45, color: isDark ? darkColors.text : lightColors.text } ] }>
            { `$${ venta }` }
          </Text>
        </View>

        <View style={ styles.valueContainer }>
          <Text style={[ styles.value, {paddingLeft: 50, color: isDark ? darkColors.text : lightColors.text}]}>
            { `$${ compra }` }
          </Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    marginBottom: 5, // Añade un pequeño espacio entre las filas
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    // fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  valueContainer: {
    flex: 1,
    alignItems: 'center',
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
} );