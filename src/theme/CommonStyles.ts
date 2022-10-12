import { StyleSheet,Dimensions } from 'react-native';

const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fullSize:{
        height:Dimensions.get("screen").height,
        // width:Dimensions.get("window").width,
        // flex:1
    }
});
export default CommonStyles;