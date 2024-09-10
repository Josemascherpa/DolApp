import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { Text } from 'react-native-paper';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';
import { StackNavigators } from './StackNavigators';


const Drawer = createDrawerNavigator();

export const DrawerNavigators = () => {  
  const {isDark} = useContext(ThemeContext);
  
  return (
    <Drawer.Navigator
      drawerContent={ ( props ) => <CustomDrawerContent { ...props} isDark={isDark} /> }
      screenOptions={
        {
          drawerType: "slide",
          headerShown: true,
          headerTitleAlign:"center", 
          headerTitleStyle: {
            justifyContent: "center",
            alignContent: "center",         
            color:isDark?darkColors.text:lightColors.text
          },
          headerStyle:{
            backgroundColor:isDark?darkColors.background:lightColors.background,            
          },
          drawerStyle:{
            backgroundColor:isDark?darkColors.background:lightColors.background
          },
          drawerItemStyle: {
            borderRadius: 10,
            backgroundColor:isDark?darkColors.containers:lightColors.containers,  
          },    
          drawerLabelStyle:{
            color:isDark?darkColors.text:lightColors.text,            
          }      
        }
      }>
      <Drawer.Screen name="DolApp" component={ HomeScreen } />      
      <Drawer.Screen name="StackNavigators" component={ StackNavigators } options={{headerShown:false,drawerItemStyle:{display:"none"}}}/>
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = ({ isDark, ...props }: { isDark: boolean } & DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>      
      <Text style={ { color:isDark?darkColors.text:lightColors.text, padding: 10, textAlign: "center", fontWeight: "bold" } }>Dolar Argentina</Text>
      <DrawerItemList{ ...props } />
    </DrawerContentScrollView>
  );
};