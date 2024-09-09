import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';
import { capitalizeFirstLetter } from '../config/helpers/caseHelper';
import { formatterDate } from '../config/helpers/dateHelper';

import { Dolar } from '../domain/dolar';
import { ViewSeparator } from './ViewSeparator';

interface Props {
  dolar: Dolar;
}

export const DolarCard = ({ dolar }: Props) => {
  {
    dolar.casa==="contadoconliqui"?dolar.casa="CCL":"Contado con Liqui"
  }
  const { isDark } = useContext(ThemeContext);
  const date: string = formatterDate(dolar.fechaActualizacion);
  
  return (
    <Card style={[styles.cardContainer, { backgroundColor: isDark ? darkColors.containers : lightColors.containers }]}>
      <Text style={[styles.title, { color: isDark ? darkColors.text : lightColors.text }]}>
        {`Dolar ${dolar.casa==="CCL"?"CCL":capitalizeFirstLetter(dolar.casa)}`}
      </Text>

      <ViewSeparator 
        venta={dolar.venta.toFixed(2)}
        compra={dolar.compra.toFixed(2)}
      />

      <Text style={[styles.date, { color: isDark ? darkColors.text : lightColors.text }]}>
        {date}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000000',
    padding: 10,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  date: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
  },
});