import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, } from 'react';
import { View } from 'react-native';
import { Button, Text, } from 'react-native-paper';
import { globalStyles } from '../themes/theme';
import { capitalizeFirstLetter } from '../config/helpers/caseHelper';
import { IonIcon } from '../components/IonIcon';
import { GraphDolar } from '../components/GraphDolar';

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

  useLayoutEffect( () => {
    navigation.setOptions( {
      headerLeft: () => (
        <Button
          style={ { backgroundColor: 'transparent', paddingTop: 8 } } // Cambié backgroundColor a 'transparent'
          onPress={ () => navigation.goBack() }
          textColor="black"
        >
          <IonIcon name={ "arrow-back-outline" } size={ 27 }  />

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
      <GraphDolar />
    </View>
  );
};