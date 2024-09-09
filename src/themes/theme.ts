import { StyleSheet } from 'react-native';

export interface ThemeColors{
  primary:string;
  text:string;
  containers:string;
  background:string;
  buttonTextColor:string;
  separator:string;
}

export const globalStyles = StyleSheet.create( {
  containerView:{
    flex: 1,
    padding: 10,    
  },
  btnPrimary: {
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor:"#15055a"
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },
  textPrimary:{
    fontSize:20,
  },
  textSecondary:{
    fontSize:16,
  }
} );

export const lightColors:ThemeColors={
  primary:"#0d0683",
  text:"#313131",
  containers:"#c5c5c5",
  background:"#d9d9d9",
  buttonTextColor:"#313131",
  separator:"#b6b6b6"
}
export const darkColors:ThemeColors={
  primary:"#0d0683",
  text:"#d9d9d9",
  containers:"#1f1f1f",
  background:"#313131",
  buttonTextColor:"#d9d9d9",
  separator:"#4c4c4c"
}