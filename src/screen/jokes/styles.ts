import { StyleSheet } from 'react-native';
import { commonStyles } from '../../theme';

const styles = StyleSheet.create({
  ...commonStyles,
  center:{
    alignItems: "center",justifyContent:"center"
  },
  roundView:{
    position: "absolute",
    backgroundColor: 'orange',
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: '10%',
    alignItems:"center",
    justifyContent:"center"
  },
  padding:{
    padding:20
  }
});

export default styles;