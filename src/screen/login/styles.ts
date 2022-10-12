import { StyleSheet } from 'react-native';
import { commonStyles } from '../../theme';

const styles = StyleSheet.create({
  ...commonStyles,
  inputTextStyle:{
    borderWidth:0.5,
    borderColor:"grey",
    height:45,
    marginStart:10,
    marginEnd:10,
    padding:5,
    marginTop:10
  }
});

export default styles;