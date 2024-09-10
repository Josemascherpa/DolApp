
import { useContext } from 'react';
import {  View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
  name:string;
  size:number;
}

export const IonIcon = ({name,size}:Props) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
      <Icon name={name} size={ size } color={isDark?darkColors.text:lightColors.text} />
    </View>
  );
};