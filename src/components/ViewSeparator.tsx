
import { useContext } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';
import { countLetters } from '../config/helpers/countLettersHelper';

interface Props {
  stringLeft: string;
  stringRight: string;
  backgroundBoolean: boolean;
  styleMod?: StyleProp<ViewStyle>;
}

export const ViewSeparator = ( { stringLeft, stringRight, backgroundBoolean, styleMod }: Props ) => {
  const { isDark } = useContext( ThemeContext );

  const getTextStyle = ( text: string ) => {
    const letters: number = countLetters( text );

    switch ( true ) {  // Evaluamos condiciones booleanas
      case letters > 8:
        return styles.textLong;
      case letters > 6:
        return styles.textMedium;
      default:
        return styles.textShort;
    }
  };


  return (
    <View style={ [
      styles.viewSeparator,
      backgroundBoolean
        ? { backgroundColor: isDark ? darkColors.separator : lightColors.separator }
        : { backgroundColor: 'transparent' }
    ] }>
      <Text style={ [
        getTextStyle(stringLeft) ,
        { color: isDark ? darkColors.text : lightColors.text } ] }>{ stringLeft }
      </Text>
      <Text style={ [
        getTextStyle(stringRight) 
        , { color: isDark ? darkColors.text : lightColors.text } ] }>{ stringRight }
      </Text>
    </View>
  );
};
const styles = StyleSheet.create( {
  viewSeparator: {
    backgroundColor: "red",
    borderRadius: 5,
    width: "100%",
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textShort: {
    paddingLeft:10
  },
  textMedium: {

  },
  textLong: {

  }

} );