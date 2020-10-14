import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    activeStyle:{
        height:50,
        aspectRatio:1/1,
        backgroundColor:'#fdd280',
        borderRadius:90,
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#fdd280',
        elevation:5
    }
});

export default styles;