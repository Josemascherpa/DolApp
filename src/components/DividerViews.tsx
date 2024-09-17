
import { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { darkColors, lightColors } from '../themes/theme';
import { Divider } from 'react-native-paper';

interface Props {
  paddingTopView?: number;
  paddingBottomView?: number;
  heightSeparator?: number;
}

export const DividerViews = ( { paddingTopView = 10, paddingBottomView=10,heightSeparator = 2 }: Props ) => {
  const { isDark } = useContext( ThemeContext );
  return (
    <View style={ { paddingBottom: paddingBottomView,paddingTop:paddingTopView } }>
      <Divider style={ { height: heightSeparator, backgroundColor: isDark ? darkColors.separator : lightColors.separator } } />
    </View>
  );
};