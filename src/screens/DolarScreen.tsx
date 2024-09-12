import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Text, } from 'react-native-paper';
import { globalStyles } from '../themes/theme';
import { capitalizeFirstLetter } from '../config/helpers/caseHelper';
import { IonIcon } from '../components/IonIcon';
import { GraphDolar } from '../components/GraphDolar';
import { getDolarsGraphs } from '../actions/get-dolarsGraphs';
import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native-gesture-handler';

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

  const navigation = useNavigation();

  const { isLoading, data } = useQuery( {
    queryKey: [ `dolarGraph${casaDolar}` ],
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

    <View style={ [ globalStyles.containerView, {} ] }>
      <Text>Casa Dolar: { casaDolar }</Text>
      <Text>Venta Dolar: { ventaDolar }</Text>
      <Text>Compra Dolar: { compraDolar }</Text>
      {
        isLoading ?
          <ActivityIndicator /> :
          <FlatList
            data={ data }
            style={ { marginTop: 10, borderRadius: 10 } }
            keyExtractor={ ( item ) => item.casa + item.fecha }
            numColumns={ 1 }
            renderItem={ ( { item: dolar } ) => (
              <Text>{ dolar.casa }</Text>
            ) }
          />

      }
      <GraphDolar />
    </View>
  );
};