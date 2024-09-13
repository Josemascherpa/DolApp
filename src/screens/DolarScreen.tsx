import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Text, } from 'react-native-paper';
import { globalStyles } from '../themes/theme';
import { capitalizeFirstLetter } from '../config/helpers/caseHelper';
import { IonIcon } from '../components/IonIcon';
import { GraphDolar } from '../components/GraphDolar';
import { getDolarsGraphs } from '../actions/get-dolarsGraphs';
import { useQuery } from '@tanstack/react-query';
import { reduceGraphHelper } from '../config/helpers/reduceGraphHelper';


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

    <View style={ [ globalStyles.containerView, {} ] }>      
      {
        isLoading ?
          <ActivityIndicator /> :
          <>
            {/* <DolarCard dolar={}/> */}
            <Text style={styles.textSeparator}> Historial Dolar </Text>
            { data && <GraphDolar data={ reduceGraphHelper({data}) } /> }
          </>

      }

    </View>
  );
};

const styles = StyleSheet.create({
  textSeparator:{
    fontWeight:"bold",
    fontSize:20,
    alignSelf:"center"
  }
})