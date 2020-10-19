import {StyleSheet, Dimensions} from 'react-native';

const AVATAR_HEIGHT = Dimensions.get('screen').height/3
const AVATAR_IMAGE = 150
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    avatarContainer:{
        height:AVATAR_HEIGHT,
        backgroundColor:'#ffc3a0',
        paddingHorizontal:10
    },
    avatarHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        fontSize:18,
        color:'#fff'
    },
    activeButton:{
        textDecorationLine:'underline',
        color:'#fff'
    },
    avatarImage:{
        height:AVATAR_IMAGE,
        marginTop:AVATAR_HEIGHT/2-AVATAR_IMAGE/2,
        aspectRatio:1/1,
        backgroundColor:'#ff00ff',
        borderWidth:5,
        borderColor:'#fff',
        borderRadius:180,
        alignSelf:'center'
    }
});

export default styles;