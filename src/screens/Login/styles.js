import {StyleSheet} from 'react-native';

const LOGO_HEIGHT = 200;
const LOGO_WIDTH = 200;
const BRAND_SIZE = 50;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        padding:10,
        backgroundColor:'#fff'
    },
    headerContainer:{
        flex:5,
        justifyContent:'space-around'
    },
    header:{
        textAlign:'center',
        fontSize:16,
        color:'#fbbf64'
    },
    logo:{
        height:LOGO_HEIGHT,
        width:LOGO_WIDTH,
        // backgroundColor:'#bada55',
        backgroundColor:'#fff',
        alignSelf:'center'
    },
    note:{
        color:'#62cfde',
        textAlign:'center'
    },
    brand:{
        fontSize:BRAND_SIZE,
        textAlign:'center',
        fontStyle:'italic',
        color:'#cacbd3',
        fontFamily:'times new roman'
    },
    inputContainer:{

    },
    clear:{
        color:'lightblue',
        textDecorationLine:'underline',
        alignSelf:'flex-end',
        marginBottom: 10
    },
    buttonContainer:{
        flex:1
    },
    cancel:{
        textAlign:'center',
        color:'#9f9c90',
        textDecorationLine:'underline'
    }
});
export default styles;
