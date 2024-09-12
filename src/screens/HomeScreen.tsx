
import { DrawerActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useContext, } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { darkColors, globalStyles, lightColors } from '../themes/theme';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';
import { getDolars } from '../actions/get-dolars';
import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native-gesture-handler';
import { DolarCard } from '../components/DolarCard';
import { IonIcon } from '../components/IonIcon';


export const HomeScreen = () => {

  const { isLoading, data, refetch } = useQuery( {
    queryKey: [ 'dolares' ],
    queryFn: () => getDolars(),
    staleTime: 1000 * 60 * 15, // cierto tiempo para mantener en cache 
    refetchInterval: 1000 * 60 * 15,//y volver a hacer la peticion
  } );

  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const { isDark } = useContext( ThemeContext );


  useFocusEffect(
    useCallback( () => {
      navigation.setOptions( {
        headerLeft: () => (
          <Button
            style={ { paddingTop: 8 } }
            onPress={ () => navigation.dispatch( DrawerActions.openDrawer ) }
            textColor={ isDark ? darkColors.text : lightColors.text }
          >
            <IonIcon name={ "menu-outline" } size={ 25 } />
          </Button>
        ),
        headerRight: () => (
          <Button
            style={ { backgroundColor: 'transparent', paddingTop: 8 } } // Cambié backgroundColor a 'transparent'
            onPress={ () => refetch() }
            textColor="black"
          >
            <IonIcon name={ "refresh-outline" } size={ 27 } />
          </Button>
        ),
      } );
    }, [ isDark, navigation ] )
  );



  return (
    <View style={ [ globalStyles.containerView, { marginTop: top } ] }>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>
            <FlatList
              data={ data }
              style={ { marginTop: 10, borderRadius: 10 } }
              keyExtractor={ ( item ) => item.nombre }
              numColumns={ 1 }
              renderItem={ ( { item: dolar } ) => (
                <DolarCard dolar={ dolar } />
              ) }
            />
            <View style={ { alignItems: "center", paddingTop: 2, flexDirection: "row", justifyContent: "center" } }>
              <Text>
                Datos obtenidos de{ " " }
                <Text style={ { fontWeight: 'bold' } }>DolarApi.com</Text>
              </Text>
            </View>
          </>
      }
    </View >
  );
};
