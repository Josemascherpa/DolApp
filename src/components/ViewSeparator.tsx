
import { useContext } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';

interface Props {
  stringLeft: string;
  stringRight: string;
  backgroundBoolean: boolean;
  styleMod?: StyleProp<ViewStyle>;
}

export const ViewSeparator = ( { stringLeft, stringRight, backgroundBoolean, styleMod }: Props ) => {
  const { isDark } = useContext( ThemeContext );
  return (
    <View style={ [
      styles.viewSeparator,
      backgroundBoolean
        ? { backgroundColor: isDark ? darkColors.separator : lightColors.separator }
        : { backgroundColor: 'transparent' }
    ] }>
      <Text style={ [
        backgroundBoolean ? styles.text : styles.textNumbers,
        { color: isDark ? darkColors.text : lightColors.text } ] }>{ stringLeft }
      </Text>
      <Text style={ [
        backgroundBoolean ? styles.text : styles.textNumbers
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
  text: {
    paddingHorizontal: 15
  },
  textNumbers: {
    paddingHorizontal: 12
  }
} );