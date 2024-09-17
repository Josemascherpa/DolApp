import { useNavigation } from '@react-navigation/native';
import React, { useContext, useLayoutEffect, } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Text, } from 'react-native-paper';
import { darkColors, globalStyles, lightColors } from '../themes/theme';
import { capitalizeFirstLetter } from '../config/helpers/caseHelper';
import { IonIcon } from '../components/IonIcon';
import { GraphDolar } from '../components/GraphDolar';
import { getDolarsGraphs } from '../actions/get-dolarsGraphs';
import { useQuery } from '@tanstack/react-query';
import { reduceGraphHelper } from '../config/helpers/reduceGraphHelper';
import { ThemeContext } from '../context/ThemeContext';
import { DividerViews } from '../components/DividerViews';


type DolarScreenProps = {
  route: {
    params: {
      casaDolar: string;
      ventaDolar: string;
      compraDolar: string;
    };
  };
};

export const DolarScreen = ( { route }: DolarScreenProps ) => {

  const { casaDolar, ventaDolar, compraDolar } = route.params;
  const { isDark } = useContext( ThemeContext );
  const navigation = useNavigation();

  const { isLoading, data } = useQuery( {
    queryKey: [ `dolarGraph${ casaDolar }` ],
    queryFn: () => getDolarsGraphs( { nombreDolar: casaDolar.toLocaleLowerCase() } ),
    staleTime: 1000 * 60 * 15, // cierto tiempo para mantener en cache 
    refetchInterval: 1000 * 60 * 15,//y volver a hacer la peticion
  } );

  useLayoutEffect( () => {
    navigation.setOptions( {
      headerLeft: () => (
        <Button
          style={ { backgroundColor: 'transparent', paddingTop: 8 } } // Cambié backgroundColor a 'transparent'
          onPress={ () => navigation.goBack() }
          textColor="black"
        >
          <IonIcon name={ "arrow-back-outline" } size={ 27 } />

        </Button>
      ),
      headerTitle: ( `Dolar ${ capitalizeFirstLetter( casaDolar ) }` ),
    } );
  }, [ navigation, casaDolar ] );

  return (

    <View style={ [ globalStyles.containerView ] }>
      {
        isLoading ?
          <ActivityIndicator color={ isDark ? darkColors.separator : lightColors.separator } /> :
          <>
            <View style={ { backgroundColor: isDark ? darkColors.background : lightColors.background, flex: 0.14, borderRadius: 10 } }>
              <Text style={ [ styles.textSeparator, { color: isDark ? darkColors.text : lightColors.text } ] }>Venta</Text>
              <Text style={ [ styles.text, { color: isDark ? darkColors.text : lightColors.text } ] }>{ `$${ ventaDolar }` }</Text>
            </View>

            <DividerViews paddingTopView={ 11 } paddingBottomView={ 10 } />

            <View style={ { backgroundColor: isDark ? darkColors.background : lightColors.background, flex: 0.14, borderRadius: 10 } }>
              <Text style={ [ styles.textSeparator, { color: isDark ? darkColors.text : lightColors.text } ] }>Compra</Text>
              <Text style={ [ styles.text, { color: isDark ? darkColors.text : lightColors.text } ] }>{ `$${ compraDolar }` }</Text>
            </View>

            <DividerViews paddingTopView={ 11 } paddingBottomView={ 10 } />

            <Text style={ [ styles.textSeparator, { color: isDark ? darkColors.text : lightColors.text, paddingBottom: 5 } ] }> Gráfico </Text>
            { data && <GraphDolar data={ reduceGraphHelper( { data } ) } /> }
            <View style={ { alignItems: "center", paddingTop: 2, justifyContent: "center" } }>
              <Text style={ { color: isDark ? darkColors.text : lightColors.text } }>
                Datos obtenidos de{ " " }
                <Text style={ { fontWeight: 'bold' } }>DolarApi.com</Text>
              </Text>
            </View>
          </>
      }
    </View>
  );
};

const styles = StyleSheet.create( {
  textSeparator: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
  }
} );
