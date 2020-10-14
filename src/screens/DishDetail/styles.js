import {StyleSheet, Dimensions} from 'react-native';
import dishStyle from '../DishScreen/styles';

const DISH_IMAGE_HEIGHT = Dimensions.get('screen').height/2-50;
const ICON_HEIGHT = 50
const detailStyles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    dishImage:{
        backgroundColor:'#ffb8af',
        // height:DISH_IMAGE_HEIGHT
    },
    icons:{
        height:ICON_HEIGHT,
        aspectRatio:1/1,
        backgroundColor:'#fff',
        position:'absolute',
        borderRadius:90,
        elevation:5,
        justifyContent:'center',
        alignItems:'center',
    },
    amountDish:{
        margin:10,
        height:200,
        elevation:3,
        borderRadius:10,
        paddingLeft:10,
        justifyContent:'space-around'
    },
    dishName:{
        marginTop:25,
        color:'#ee4444'
    },
    price:{
        color:'#ee4444'
    },
    vote:{
        padding:20,
        borderRadius:10,
        elevation:3,
        marginHorizontal:10,
        marginBottom:10
    }
})

const styles = {...dishStyle,...detailStyles}
export default styles