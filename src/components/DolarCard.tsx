
import { StyleSheet } from 'react-native';
import { Dolar } from '../domain/dolar';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';
import { Card, Text } from 'react-native-paper';
import { capitalizeFirstLetter } from '../config/helpers/caseHelper';
import { ViewSeparator } from './ViewSeparator';
import { formatterDate } from '../config/helpers/dateHelper';

interface Props {
  dolar: Dolar;
}
export const DolarCard = ( { dolar }: Props ) => {

  const { isDark } = useContext( ThemeContext );
  const date: string = formatterDate( dolar.fechaActualizacion );
  return (
    <Card style={ [ styles.cardContainer, { backgroundColor: isDark ? darkColors.containers : lightColors.containers } ] }>

      <Text style={ [ styles.textCenter, { color: isDark ? darkColors.text : lightColors.text, padding: 3 } ] }>{ `Dolar ${ capitalizeFirstLetter( dolar.casa ) }` }</Text>

      <ViewSeparator backgroundBoolean stringLeft={ "Venta" } stringRight={ "Compra" } />

      <ViewSeparator backgroundBoolean={ false } stringLeft={ `$${ /*dolar.venta.toFixed(2).toString()*/ }` } stringRight={ `$${ /*dolar.compra.toFixed(2).toString()*/ }` } />

      <Text style={ [ styles.textDate, { color: isDark ? darkColors.text : lightColors.text, padding: 3 } ] }>{ `${ date }` }</Text>
    </Card>
  );
};

const styles = StyleSheet.create( {
  cardContainer: {
    marginHorizontal: 10,
    flex: 0.15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000000',
    padding: 5, // Aumenta el padding para mayor tamaño
    width: '100%', // Ajusta el ancho según sea necesario
    alignSelf: 'center', // Centra el card en el contenedor
    height: 120,
  },
  textCenter: {
    padding: 3,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  textDate: {
    padding: 3,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
} );